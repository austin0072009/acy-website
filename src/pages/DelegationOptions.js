import { useMemo } from "react";
import { TopicText } from "../components";
import { isMobile } from "react-device-detect";

const DelegationOptions = () => {
  let data = useMemo(() => [
    {
      title: "dao.acy.finance: The Default DAO Interface",
      paragraphs: [
        "The default way to stake and vote ACY is through our main ACYDAO interface. The ACYDAO will be hosted on the domain dao.acy.finance and this will be the main staking and voting interface for the ACY Finance community to participate in governance.",
        "To stake ACY and vote on the ACYDAO, ACY holders will need to connect their wallet and spend gas on all on-chain actions.",
        "Common wallet connection options such as Metamask, Ledger, Trezor, Coinbase Link, and WalletConnect will be supported. All staking, voting, and claiming of rewards are done on-chain and require gas.",
      ],
    },
    {
      title:
        "Delegating your ACY voting power to Staking Pools or someone else",
      paragraphs: [
        "ACY stakers who do not wish to vote, but still want a share of rewards, can delegate their ACY voting power to a 3rd party address/ “pool master” who will vote on their behalf. They will be able to do so on the official ACYDAO.org interface.",
        "ACY holders retain full control of their ACY and will be able to be withdrawn or re-delegated anytime. They have to delegate their full stake (no partial stake) and can only delegate their stake to one pool at any time.",
        "The Flash Arbitrage rewards will be given to the 3rd party pool master. The pool master will then need to calculate the reward allocated to each of their pool members and have a mechanism for them to claim their rewards after. Although ACYDAO does not track or manage the distribution of the rewards, rewards due to individual members are fully recorded on-chain. ",
      ],
    },
  ]);

  return (
    <div className="pl-0 md:pl-5">
      <div
        style={{ color: "#B5B6B6", lineHeight: "30px" }}
        className="text-sm md:text-xl"
      >
        <p>
          One of the most important considerations is to make ACYDAO
          participation as easy as possible. We want to allow ACY stakers who
          are unable or have limited resources to participate in every ACYDAO
          vote to still receive rewards for staking, while providing the
          resources for others to vote on their behalf.
        </p>
        <p>
          At launch, there will be several options for users to stake, vote or
          delegate, depending on their ability to participate and their
          preferences for the type of experience they prefer (for example
          between custodial and decentralized solutions).
        </p>
      </div>
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

export default DelegationOptions;
