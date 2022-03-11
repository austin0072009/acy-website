import { Dialog, Transition } from '@headlessui/react'
import { useEffect, useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { getAddress } from '@ethersproject/address';
import { Contract } from '@ethersproject/contracts';
import { AddressZero } from '@ethersproject/constants';
import { InjectedConnector } from '@web3-react/injected-connector';
import airdropABI from "../contracts/abis/airdrop_abi.json";
import erc20ABI from "../contracts/abis/erc20_abi.json";
import "./ClaimDialog.css";

const injected = new InjectedConnector({
	supportedChainIds: [56],
})

const contractAddress = "0x4304920820C642356F4dFd792B8108DE64Ea9CB9";
const tokenAddress = "0xc94595b56e301f3ffedb8ccc2d672882d623e53a";

const networks = {
	bsc: {
		chainId: `0x${Number(56).toString(16)}`,
		chainName: "Binance Smart Chain Mainnet",
		nativeCurrency: {
			name: "Binance Chain Native Token",
			symbol: "BNB",
			decimals: 18
		},
		rpcUrls: [
			"https://bsc-dataseed1.binance.org",
			"https://bsc-dataseed2.binance.org",
			"https://bsc-dataseed3.binance.org",
			"https://bsc-dataseed4.binance.org",
			"https://bsc-dataseed1.defibit.io",
			"https://bsc-dataseed2.defibit.io",
			"https://bsc-dataseed3.defibit.io",
			"https://bsc-dataseed4.defibit.io",
			"https://bsc-dataseed1.ninicoin.io",
			"https://bsc-dataseed2.ninicoin.io",
			"https://bsc-dataseed3.ninicoin.io",
			"https://bsc-dataseed4.ninicoin.io",
			"wss://bsc-ws-node.nariox.org"
		],
		blockExplorerUrls: ["https://bscscan.com"]
	}
};

export function isAddress(value) {
	try {
		return getAddress(value);
	} catch {
		return false;
	}
}

// account is not optional
export function getSigner(library, account) {
	return library.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(library, account) {
	return account ? getSigner(library, account) : library;
}

// account is optional
export function getContract(address, ABI, library, account) {
	if (!isAddress(address) || address === AddressZero) {
		throw Error(`Invalid 'address' parameter '${address}'.`);
	}

	return new Contract(address, ABI, getProviderOrSigner(library, account));
}

function ClaimDialog({ isOpen, setIsOpen }) {

	const { active, account, library, connector, activate, deactivate } = useWeb3React();
	const [claimAmount, setClaimAmount] = useState(0);

	useEffect(() => {
		if (!active) {
			setClaimAmount(0);
			return;
		}

		const tokenContract = getContract(tokenAddress, erc20ABI, library, account);
		tokenContract.allowance(contractAddress, account)
			.then(res => {
				setClaimAmount(res);
				window.amount = res;
			})
			.catch(err => console.error(err));
	}, [account])

	const changeNetwork = async () => {
		try {
			if (!window.ethereum) throw new Error("No crypto wallet found");
			await window.ethereum.request({
				method: "wallet_addEthereumChain",
				params: [
					{
						...networks["bsc"]
					}
				]
			});
		} catch (err) {
			console.error(err);
		}
	};

	async function connect() {

		await changeNetwork();

		try {
			await activate(injected)
			console.log(library)
		} catch (ex) {
			console.log(ex)
		}
	}

	async function disconnect() {
		try {
			deactivate()
		} catch (ex) {
			console.log(ex)
		}
	}

	// 0x0f355a70d27eF1376e77C6Df9d9D8d661bCDf339
	const onClickClaim = () => {
		const tokenContract = getContract(tokenAddress, erc20ABI, library, account);

		if (claimAmount === 0 || claimAmount.toNumber() === 0) {
			alert("Account not having allowance! Please check whether you get the prize or not.")
			return;
		}

		tokenContract.transferFrom(contractAddress, account, claimAmount)
			.then(res => {
				console.log(res);
			})
			.catch(err => {
				console.error(err);
			})
	}

	return (
		<Transition
			show={isOpen}
		>
			<Dialog onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 overflow-y-auto" style={{
				zIndex: 101
			}}>
				<div className="flex items-center justify-center min-h-screen">

					<Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

					{/* This element is to trick the browser into centering the modal contents. */}
					{/* <span
						className="inline-block h-screen align-middle justify-middle"
						aria-hidden="true"
					>
						&#8203;
					</span> */}
					<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-black shadow-xl rounded-2xl" id="claim-dialog-content">
						<h1 id="claim-title">Claim ACY</h1>
						<div>
							<p>Please connect to wallet first.</p>
							{account ?
								<div id="connect-button">Connected</div>
								:
								<div id="connect-button" onClick={connect}>Connect to wallet</div>
							}
							{/* {account &&
								<div id="connect-button" onClick={disconnect}>Disconnect</div>
							} */}
							<p>Wallet Address: {account ? account : "Not Connected (BSC Mainnet)"}</p>
						</div>

						{account &&
							<button id="claim-button" onClick={onClickClaim}>Claim</button>
						}
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default ClaimDialog;

