import { useMemo } from "react";
import { TopicText } from "../components";
import { isMobile } from "react-device-detect";
const WhatIsACY = () => {
  console.log(isMobile);
  let data = useMemo(() => [
    {
      title: "Protocol, Interface, Labs",
      paragraphs: [
        "To begin, we should make clear the distinctions between the different areas of 'ACY', some of which may confuse new users. ",
        " ACY Tech: The company which developed the ACY protocol, along with the web interface. ",
        "The ACY Protocol: A suite of persistent, non-upgradable smart contracts that together create an automated market maker, a protocol that facilitates peer-to-peer market making and swapping of ERC-20 tokens on the blockchain. ",
        "The ACY Interface: A web interface that allows for easy interaction with the ACY protocol. The interface is only one of many ways one may interact with the ACY protocol. ",
        "Flash Arbitrage: A multi-route arbitrage program automatically executed within each transaction and built in the ACY Protocol. ",
        "ACY Governance: A governance system for governing the ACY Protocol, enabled by the ACY token. ",
        "The following is a brief overview of the ACY protocol",
      ],
      bulletType: 0,
      useBg: false,
    },
    {
      title: "Introduction",
      paragraphs: [
        "The ACY protocol is a peer-to-peer system designed for exchanging cryptocurrencies (ERC-20 Tokens) on the blockchain. The protocol is implemented as a set of persistent, non-upgradable smart contracts; designed to prioritize censorship resistance, security, self-custody, and to function without any trusted intermediaries who may selectively restrict access. ",
        "There are currently two grades of the ACY protocol. The basic grade are open source and licensed under GPL. The advanced grade is not open source, which are usable only for the users who own 200,000 ACY tokens. The version of ACY, once deployed, will function with in perpetuity, with 100% uptime, providing the continued existence of the blockchain.",
      ],
      bulletType: 0,
      useBg: false,
    },
    {
      title: "How does the ACY protocol compare to a typical market?",
      paragraphs: [
        "To understand how the ACY protocol differs from traditional exchange, it is helpful to first look at two subjects: how Automated Market Maker design deviates from traditional central limit order book-based exchanges, and how permissionless systems depart from conventional permissioned systems.",
      ],
      bulletType: 0,
      useBg: false,
    },
    {
      title: "Flash Arbitrage VS Arbitrage Robot",
      paragraphs: [
        "ACY invents flash arbitrage which is a multi-route arbitrage program executed within each transaction inside the protocol. The smart contracts of ACY Finance solve the robot-exploiting problems to a great extent so that all the users can automatically profit from the arbitrage and reduce the slippage. ",
        "The problem about AMM are trading slippage and impermanent loss, which is embodied in the close relationship between the price fluctuation of trading pairs and the volume of liquidity funds. Once liquidity is insufficient, users will bear considerable losses and arbitrageurs will benefit from users’ losses. ACY Finance is committed to reducing the slippage and impermanent loss so that the users can benefit from each transaction. ",
        "However, it may be difficult for users to seize the opportunity before professional arbitrageurs. The swapping of ACY Finance is added arbitrage function within normal swap contracts, meaning that users can automatically carry out arbitrage operations and obtain profits brought by arbitrage. What is more, most of the users can not complete the arbitrage transaction by themselves. The atomicity of ACY smart contracts will help every user to win the game of arbitrage. If the normal transactions and arbitrage transactions are placed in one transaction to call a contract, no other arbitrage robots can insert the transactions into them.",
      ],
      bulletType: 1,
      useBg: true,
    },
    {
      title: "AMM VS Order Book",
      paragraphs: [
        "Most publicly accessible markets use a central limit order book style of exchange, where buyers and sellers create orders organized by price level that are progressively filled as demand shifts. Anyone who has traded stocks through brokerage firms will be familiar with an order book system. ",
        "The ACY protocol takes a different approach, using an Automated Market Maker (AMM), sometimes referred to as a Constant Function Market Maker, in place of an order book. ",
        "At a very high level, an AMM replaces the buy and sell orders in an order book market with a liquidity pool of two assets, both valued relative to each other. As one asset is traded for the other, the relative price of the two assets shift, and a new market rate for both is determined. In this dynamic, a buyer or seller trades directly with the pool, rather than with specific orders left by other parties. The advantages and disadvantages of automated market makers versus their traditional order book counterparts are under active research by a growing number of parties. We have collected some notable examples on our research page.",
      ],
      bulletType: 1,
      useBg: false,
    },
    {
      title: "Permissionless Systems",
      paragraphs: [
        "The second departure from traditional markets is the permissionless design of the ACY protocol. Permissionless design means that the protocol’s services are entirely open for public use, with no ability to selectively restrict who can or cannot use them: anyone can swap, provide liquidity, or create new markets at will. This is a departure from traditional financial services, which typically restrict access based on geography, wealth status, and age.",
      ],
      bulletType: 1,
      useBg: false,
    },
    {
      title: "Where can I find more information",
      paragraphs: [
        "For research into the economics of AMMs, game theory, or optimization research, check out the research paper. ",
        "For new features implemented in advanced version that expand and refine Flash Arbitrage design, please follow the official updating. ",
        "The protocols are sometimes referred to as peer-to-contract systems as well. These are similar to a peer-to-peer systems, but with immutable, persistent programs known as smart contracts taking the place of a peer. A peer-to-contract system facilitates peer-to-peer functionality, but uses immutable, persistent programs known as smart contracts to automate some processes.",
      ],
      bulletType: 1,
      useBg: false,
    },
  ]);
  return (
    <div className="pl-0 md:pl-5">
      {data.map((item) => (
        <TopicText
          title={item.title}
          paragraphs={item.paragraphs}
          bulletType={item.bulletType}
          useBg={item.useBg}
        />
      ))}

      {!isMobile && <div style={{ height: 500 }}></div>}
    </div>
  );
};

export default WhatIsACY;
