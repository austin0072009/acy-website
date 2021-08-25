import { useMemo } from "react";
import { ColoredCard } from "../components";
import { BorderedTopicText } from "../atoms";
import { isMobile } from "react-device-detect";
import bullet from "../assets/arrow_bullet_orange.png";
const Advantage = () => {
  let advantages = useMemo(() => [
    {
      title: "Built-in Protocol",
      content:
        "Flash Arbitrage happens instantly and accurately thanks to our protocol level arbitrage implementation using internal pools.",
    },
    {
      title: "Automatical Arbitrage",
      content:
        "It may be difficult for users to seize the arbitrage opportunity without professional skill. Don't need to worry whether you will get your arbitrage or not, its AUTOMATIC.",
    },
    {
      title: "Multi Route",
      content:
        "Your swap will be splitted into multi-routes, using multiple liquidity pools to help you swap with the best price.",
    },
    {
      title: "Optimal Algorithm",
      content:
        "Our algorithm will help you choose the most optimized routing solution to give you the most benefits.",
    },
    {
      title: "No Delay",
      content:
        "Our algorithm will help you choose the most optimized routing solution to give you the most benefits.",
    },
    {
      title: "Low Slippage",
      content:
        "As our swaps are multi-routed, impacts of price slippage of swap are also distributed among all liquidity pools.",
    },
    {
      title: "Extra Income",
      content:
        "Without Flash Arbitrage, you will get some tokens; with Flash Arbitrage, you will get some tokens + arbitraged revenue!",
    },
    {
      title: "Mutual Benefit",
      content:
        "Flash Arbitrage is a product for everyone, the revenue is distributed with traders, LP holders, and to buy back acy token.",
    },
  ]);
  return (
    <div className="pl-0 md:pl-5">
      <p className="text-gray-100 text-sm md:text-xl">
        The smart contracts of ACY Finance are able to solve the slippage
        problems caused by robots to a great extent. If multi-route arbitrage
        transaction is placed inside the swap, all the users can automatically
        profit from the arbitrage and then reduce the slippage. Without enough
        arbitrage space, other arbitragers including the miner bots will be
        disinterested in this swap.
        <br />
        <br />
        What is more, Flash Arbitrage is able to search the optimal solution of
        arbitrage algorithm during the dynamic decision process. The allocation
        of routes will be executed after the optimum weights are calculated by
        real-time programming. There is no delay because the buyers and sellers
        are matched inside the protocol different from 1inch and others.
        <br />
        <br />
        Flash Arbitrage is appointed to promote fair competition by ACY Finance,
        which is only an Anti-MEV technology but also an anti-corruption system
        fighting against the robots. The Arbitrage Supremacy of ACY Finance
        means No other arbitrage bots but us secure the arbitrage for our users.
        In this new world created by ACY, the interest of the users will be
        appreciated and the liquidity providers will be wealthy over the long
        term.
      </p>
      <div className="flex text-orange text-2xl items-center my-10 font-medium">
        <img
          src={bullet}
          alt="bullet"
          className="mr-3"
          style={{ maxWidth: 30 }}
        />
        Arbitrage supremacy
      </div>
      <div className="px-1 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {advantages.map((item) => (
            <BorderedTopicText title={item.title} content={item.content} />
          ))}
        </div>
        <ColoredCard
          title="Fairness and Justness"
          content="Create an open, just and fair decentralized exchange. No more value extraction from miners, arbitragers, enjoy your healthy DEX that secures your arbitrage value."
        ></ColoredCard>
      </div>

      {!isMobile && <div style={{ height: 500 }}></div>}
    </div>
  );
};

export default Advantage;
