import { MEVGraphs, NoBots } from "../components";
const MEVRobots = () => {
  return (
    <div className="pl-0 md:pl-5">
      <p className="text-sm md:text-xl text-gray-100">
        The problem about AMM are trading slippage and impermanent loss, which
        is embodied in the close relationship between the price fluctuation of
        trading pairs and the volume of liquidity funds. Once liquidity is
        insufficient, users will bear considerable losses and arbitrageurs will
        benefit from users’ losses. ACY Finance is committed to reducing the
        slippage and impermanent loss so that the users can benefit from each
        transaction.
        <br />
        <br /> However, it may be difficult for users to seize the opportunity
        before professional arbitrageurs. The swapping of ACY Finance is added
        arbitrage function within normal swap contracts, meaning that users can
        automatically carry out arbitrage operations and obtain profits brought
        by arbitrage. What is more, most of the users can not complete the
        arbitrage transaction by themselves. The atomicity of ACY smart
        contracts will help every user to win the game of arbitrage. If the
        normal transactions and arbitrage transactions are placed in one
        transaction to call a contract, no other users including the MEV robots
        can insert the transactions into them. <br />
        <br />
        There are 4 kinds of robots as following, but MEV robots are the most
        powerful.
      </p>
      <NoBots></NoBots>
      <p className="text-sm md:text-xl text-gray-100 mb-10">
        In the past, MEV robots were invincible and the interests of users and
        liquidity providers are damaged. Why the MEV robots can exploit the
        value? The essential reason for the on-chain attack lies in the design
        of the blockchain. <br />
        <br />
        The first reason is the mempool design of the blockchain. After the
        transactions sending out, they are not directly packaged by the miners,
        but need to enter the mempool temporarily. The mempool contains pending
        transactions, and the miners can monitor any transaction and function
        called inside the mempool. This provides the convenience for the miners
        to monitor transaction events. <br />
        <br />
        Secondly, the block generating provides the execution time for the
        attackers. According to Etherscan data, the current average block
        generation time of Ethereum is 13s, so the miners can reorganize blocks,
        reorder transaction, insert or drop transaction and initiate the
        front-running attack，back-running attack, sandwich attack, time zone
        attack.
        <br />
      </p>
      <MEVGraphs></MEVGraphs>
    </div>
  );
};

export default MEVRobots;
