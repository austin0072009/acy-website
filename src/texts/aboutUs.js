const aboutUs = `
# ACY Finance 

## ABOUT US


ACY invents **flash arbitrage** which is a **multi-route arbitrage program** executed within each transaction inside the protocol. The smart contracts of ACY Finance solve the robot-exploiting problems to a great extent so that all the users can automatically profit from the arbitrage and reduce the slippage.



The problem about AMM are trading slippage and impermanent loss, which is embodied in the close relationship between the price fluctuation of trading pairs and the volume of liquidity funds. Once liquidity is insufficient, users will bear considerable losses and arbitrageurs will benefit from users’ losses. ACY Finance is committed to reducing the slippage and impermanent loss so that the users can benefit from each transaction.



However, it may be difficult for users to seize the opportunity before professional arbitrageurs. The swapping of ACY Finance is added arbitrage function within normal swap contracts, meaning that users can automatically carry out arbitrage operations and obtain profits brought by arbitrage. What is more, most of the users can not complete the arbitrage transaction by themselves. The atomicity of ACY smart contracts will help every user to win the game of arbitrage. If the normal transactions and arbitrage transactions are placed in one transaction to call a contract, no other users including the MEV robots can insert the transactions into them.



In the past, MEV robots were invincible and the interests of users and liquidity providers are damaged. Why the MEV robots can exploit the value? The essential reason for the on-chain attack lies in the design of the blockchain. 



The first reason is the mempool design of the blockchain. After the transactions sending out, they are not directly packaged by the miners, but need to enter the mempool temporarily. The mempool contains pending transactions, and the miners can monitor any transaction and function called inside the mempool. This provides the convenience for the miners to monitor transaction events.



Secondly, the block generating provides the execution time for the attackers. According to Etherscan data, the current average block generation time of Ethereum is 13s, so the miners can reorganize blocks, reorder transaction, insert or drop transaction and initiate the front-running attack，back-running attack, sandwich attack, time zone attack.

Fortunately, the smart contracts of ACY Finance solve the problems to a great extent. If multi-route arbitrage transaction is placed inside the swap, all the users can automatically profit from the arbitrage and then reduce the slippage. Without enough arbitrage space, other arbitragers including the miner bots will be disinterested in this swap. 



What is more, Flash Arbitrage is able to search the optimal solution of arbitrage algorithm during the dynamic decision process. The allocation of routes will be executed after the optimum weights are calculated by real-time programming. There is no delay because the buyers and sellers are matched inside the protocol different from 1inch and others.



Flash Arbitrage is appointed to promote fair competition by ACY Finance, which is only an Anti-MEV technology but also an anti-corruption system fighting against the robots. In this new world created by ACY, the interest of the users will be appreciated and the liquidity providers will be wealthy over the long term. 
`;

export default aboutUs;
