import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { getAddress } from '@ethersproject/address';
import { Contract } from '@ethersproject/contracts';
import { AddressZero } from '@ethersproject/constants';
import { InjectedConnector } from '@web3-react/injected-connector';
import airdropABI from "../contracts/abis/airdrop_abi.json";
import "./ClaimDialog.css";

const injected = new InjectedConnector({
	supportedChainIds: [80001, 137, 56, 97],
})

const contractAddress = "0xf3BAa8F2698e8871D1f064A2A487248B248DE120";

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
// 1. 先把claim功能在测试网上调好
// 2. 改变claim model样式
// 3. 更换cliam button样式
// 4. 测试正式网claim

function ClaimDialog({ isOpen, setIsOpen }) {

	const [walletStatus, setWalletStatus] = useState('Please connect wallet first');
	const [claimStatus, setClaimStatus] = useState('Not Claimed');
	const { active, account, library, connector, activate, deactivate } = useWeb3React()

	async function connect() {
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
		const airdropContract = getContract(contractAddress, airdropABI, library, account);
		window.contract = airdropContract;
    airdropContract.claim()
			.then(res => {
				console.log('claim result', res)
			})
      .catch(e => {
				alert("Claim is restricted to the winners! Please check this wallet is in the winner list.")
        console.log('claim Error', e);
      });		
	}

	return (
		<Transition
			show={isOpen}
		>
			<Dialog onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 overflow-y-auto" style={{
				zIndex: 101
			}}>
				<div className="flex items-center justify-center min-h-screen">

					<Dialog.Overlay className="fixed inset-0 bg-black opacity-50"/>

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
							<div id="connect-button" onClick={connect}>Connect to wallet</div>
							{account &&
								<div id="connect-button" onClick={disconnect}>Disconnect</div>
							}
							<p>Wallet Address: {account ? account : "Not Connected"}</p>
						</div>

						{account &&
							<>
								<button id="claim-button" onClick={onClickClaim}>Claim</button>
								<button id="claim-button" onClick={() => setIsOpen(false)}>Cancel</button>
							</>
						}
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default ClaimDialog;

