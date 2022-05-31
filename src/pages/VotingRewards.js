import { useMemo } from "react";
import { TopicText } from "../components";
import { isMobile } from "react-device-detect";

const VotingRewards = () => {
  let data = useMemo(() => [
    {
      title: "Staking",
      paragraphs: [
        "Staking ACY Tokens will give users the ability to vote for governance, Earn Rewards from Governance Profit, Enjoy our Pro version Access (1000 ACY Tokens).",
      ],
    },
    {
      title: "Epochs",
      paragraphs: [
        "Staking and voting are done in epochs, which just means fixed periods of voting time, denominated in Ethereum block times. One ACYDAO epoch period will last about 2 weeks before the next one begins.",
        "The benefits of this short epoch period are faster reward distribution and DAO conclusion (hence faster decision-making). The cons are that there needs to be at least one voting campaign every 2 weeks, resulting in more work for the ACY team, as well as more frequent participation required from ACY Token stakers.",
        "In every epoch, there will be one or more campaigns, and each campaign will have several options. It is important that voters vote for all the campaigns since they only receive rewards for campaigns that they voted in.",
      ],
    },
    {
      title: "Delegation",
      paragraphs: [
        "We expect busy stakers to delegate their voting power to 3rd party “pools” to vote on their behalf, with these pools being able to dictate their fees and independent voting decisions. Since they are expected to share in the rewards. and their voting decisions will be fully transparent on-chain, they are expected to both be proactive in voting as well as communicating on the rationale of their decisions.",
        "This is an important part of the ACYDAO setup, and we expect to have a range of options for ACY Token stakeholders, both in terms of their preferred method of delegation as well as types of staking partners.",
      ],
    },
    {
      title: "Reward Distribution For Individual ACY Holders",
      paragraphs: [
        "Reward Distribution For Individual ACY Holders",
        "After every epoch, there will be ETH set aside for voting rewards. The total amount of rewards is decided by a few main factors: trade volume, network fees decided in the previous epoch, and proportion of fees allocated for voting rewards. The network fee percentage and fee allocation ratio are decided by the ACYDAO.",
        "As an individual ACY Token staker, your share of the rewards received after the epoch will be determined by your voting points (the amount of ACY you have staked during the epoch x the number of campaigns you voted on), in proportion to the total voting points of all ACY Token stakers.",
        "Available Rewards: Flash Arbitrage Revenue * Ratio allocated to rewards",
        "Your Voting Points: Your ACY staked * Numbers of Campaigns Voted On",
        "Your Share: Your Voting Points / Voting Points of All Stakers",
        "Your Reward: Your Share * Available Rewards",
        "Assuming you (and all the other stakers) voted for all the campaigns in that epoch, your share will be proportionate to your ACY staked vs. the total amount of ACY staked by all. If you as a ACY staker did not vote, you would not receive any rewards. If you only voted for one but not all the campaigns in that epoch, you would receive less than what you actually could have.",
      ],
    },
    {
      title: "Rewards in BTC and ETH",
      paragraphs: [
        "The Rewards will be presented to users in BTC and ETH, we will purchase BTC and ETH. Because Our Flash Arbitrage is actual protocol profits we generated from our swap transactions, the revenue will be used to purchase the most iconic tokens in crypto, BTC and ETH, and use it to reward our stakers.",
      ],
    },
  ]);

  return (
    <div className="pl-0 md:pl-5">
      <p
        style={{ color: "#B5B6B6", lineHeight: "30px" }}
        className="text-sm md:text-xl"
      >
        In this section, we describe the key concepts and mechanisms behind
        staking and voting, as well as provide an example of how these work
        together. Staking, voting, and claiming of rewards all require gas.
      </p>
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

export default VotingRewards;
