import arrowBullet from "../assets/arrow_bullet.png";
import { ColoredTab, TextTabLink, SocialMedias } from ".";

import { useMediaPredicate } from "react-media-hook";

const Governance = () => {
  let smallerThan568 = useMediaPredicate("(max-width: 567px)");

  return (
    <div className="mb-10">
      <div className="flex items-center text-gray-100 mb-5">
        <img
          src={arrowBullet}
          style={{ maxWidth: 40 }}
          alt="arrow"
          className="mr-3"
        />
        <span
          className="font-medium"
          style={{ fontSize: smallerThan568 ? 20 : 32 }}
        >
          GOVERNANCE
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-x-5">
        <div className="w-auto md:w-5/12 flex items-stretch">
          <ColoredTab></ColoredTab>
        </div>
        <div className="flex flex-col flex-grow">
          <TextTabLink title="Governance Forum" link="https://gov.acy.finance">
            Participate by proposing upgrades and discussing the future of the
            protocol with the ACY community.
          </TextTabLink>
          <SocialMedias></SocialMedias>
          <TextTabLink title="Governance Proposal">
            Vote on ACY governance proposals in Snapshot and view past
            proposals.
            <br />
            Votes are weighted by the number of ACY delegates.
          </TextTabLink>
        </div>
      </div>
    </div>
  );
};

export default Governance;
