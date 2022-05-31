import { useMemo } from "react";
import { TopicText } from "../components";
import { isMobile } from "react-device-detect";
const ACYDAO = () => {
  let data = useMemo(() => [
    {
      title: "Broad And Meaningful Representation",
      paragraphs: [
        "Given that ACY holders are the main beneficiary of increased activity and growth, they should be the ones who determine the key parameters of the network.",
        "ACY holders will vote on deciding how the Flash Arbitrage Revenue will be allocated to maximize growth, as well as value creation options. As a quick recap, the 3 options for fee allocation (%) ACY holders will vote on are:",
        "1. Voting Rewards: Immediate value creation. Holders who stake and participate in the ACYDAO get their share of the fees designated for rewards.",
        "2. Reserve Incentives: Value creation via Platform growth. By rewarding ACY reserve managers based on their performance, it helps to drive greater volume, value, and network fees.",
        "Every single ACY holder will share responsibility in the critical task of determining the appropriate set of parameters for various scenarios that will best drive long term protocol growth and sustainability.",
      ],
    },
    {
      title: "Transparency and Stability",
      paragraphs: [
        "The ACYDAO is designed for maximum viable transparency, network stability and quick recovery in cases of emergencies. The ACY team will serve as the current maintainer of the ACYDAO. We believe it is important to build the system to be as verifiable as possible while being transparent and clear about our role in the DAO.",
        "All processes and data will be stored and processed on-chain where feasible. For example, once the voting for network fees and allocation ratio is concluded, it will be executed on-chain and no one will be able to change that. Where it is not practical, there will be a set of robust off-chain community and governance processes to ensure that DAO decisions are followed through.",
        "Given that ACY is an important part of the decentralized infrastructure, network stability is crucial for the hundreds of DApps and reserves that depend on us. To reduce spamming and abuse, the ACY team will take on certain key roles, including putting up proposals for voting, protecting against malicious activities.",
        "It is important to note that changes can be monitored by the community since these operations will be done fully on-chain where feasible.",
      ],
    },
    {
      title: "Evolving Governance",
      paragraphs: [
        "As the current DAO maintainer, we take the role of facilitating discussions, driving open and transparent decision making, and executing (and following through) the formal DAO processes very seriously.",
        "If we perform this balance well, our legitimacy will continue to grow, participation will increase, and the community’s understanding of the key operations will be sufficient to allow us to gradually move more operations towards DAO votes, including network features, technical upgrades or protocol upgrade decisions.",
        "We believe that this progressive decentralization achieves the main goals of broad representation, transparency, resilience, and network stability — and we would love to work with the community to continuously improve both the on-chain and off-chain processes as we continue to evolve.",
      ],
    },
  ]);

  return (
    <div className="pl-0 md:pl-5">
      {data.map((item) => (
        <TopicText
          title={item.title}
          paragraphs={item.paragraphs}
          bulletType={item.bulletType}
        />
      ))}
      {!isMobile && <div style={{ height: 500 }}></div>}
    </div>
  );
};

export default ACYDAO;
