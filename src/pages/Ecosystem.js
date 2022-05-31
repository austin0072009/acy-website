import { TopicText } from "../components";
import { Gradient } from "../atoms";
import { useMemo } from "react";

const Ecosystem = () => {
  let data = useMemo(() => [
    {
      title: "Exchange",
      content: `The exchange sector is considered to be one of the largest industries in the crypto world. Exchanges allow investors to buy and sell cryptocurrencies and crypto assets for fiat currencies and other currencies. Exchanges play an essential role in the cryptocurrency economy, we divided them into two groups- centralized and decentralized exchanges. A distinct difference between these types of exchanges is the presence of the third party service where the investment vehicle holds the customer’s funds.`,
    },
    {
      title: "Asset management",
      content: `With the proliferation of trade and the increasing amount of wealth stored in cryptocurrencies, asset management services have emerged to take advantage of the functionality of smart contracts. This industry is divided into two parts: platforms that allow users to create and manage funds and professionally-managed crypto funds. Most of these services manage funds only inside the crypto universe.
        `,
    },
    {
      title: "Banking",
      content: `Blockchain technology disrupts the field of banking. Blockchain allows the users to streamline the loan processing and accept cryptocurrencies as a collateral. The banking industry was also affected by blockchain. In this category we included crypto banks which provide a wide range of services related to the cryptocurrency, such as providing crypto wallets(to manage their funds when and where they want), debit cards (real-time cryptocurrencies conversions), merchants (payment options) and exchanges (to earn by trading).`,
    },
    {
      title: "Blockchains",
      content: `Blockchain is a foundation of the blockchain economy. All the projects and companies in the crypto-world are based on this innovation. This infrastructure consists of two main pillars: private and public blockchain protocols. Just as with the roads and bridges in a city, this infrastructure underpins the entire cyber economy that provides market players with all the needed resources to develop everything they can imagine.
        `,
    },
    {
      title: "DevTech",
      content: `This category entails companies that created developer frameworks that help ease the way of running decentralized applications. Some companies as MetaMask allows clients to visit the distributed web without running a full Ethereum node, others as Oraclize act as an intermediary between the external data and decentralized applications. One thing is certain: with the help of these technologies and the companies that create them, blockchain companies can focus on their product.`,
    },
    {
      title: "Distributed computing",
      content: `This segment includes services that enable you to use the unused computing power of other users to solve the most intensive calculations and companies that offer to use their supercomputers. For instance, SONM offers the fog supercomputer that is designed to deal with the large amounts of data and other tasks that require computing power.`,
    },
    {
      title: "Data Storage",
      content: `Services that store your data on the blockchain based clouds or allow you to rent the unused data capacity to other users of the network. Moreover, IPFS for example, also provides users with an opportunity to show that the file, stored in their system, belongs specifically to you, by tagging documents with special human-readable names.
        `,
    },
  ]);
  return (
    <div className="relative">
      <Gradient></Gradient>
      <div
        className="relative px-4 sm:px-10 xl:px-24 lg:px-20"
        style={{ zIndex: 1 }}
      >
        <div className="p-2 md:p-10 lg:p-20">
          <div className="text-orange text-4xl md:text-5xl my-1 md:my-10">
            Ecosystem
          </div>
          {data.map((item) => (
            <TopicText
              title={item.title}
              paragraphs={[item.content]}
              bulletType="0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
