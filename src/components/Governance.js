import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { ColoredTab, TextTabLink, SocialMedias } from ".";
import { useMediaPredicate } from "react-media-hook";

const Governance = () => {
  let smallerThan568 = useMediaPredicate("(max-width: 567px)");

  return (
    <div>
      <div className="flex items-center text-gray-100 mb-5 filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100">
        <img
          src={arrowBullet}
          style={{ maxWidth: 40 }}
          alt="arrow"
          className="mr-3 moveLROnHover"
        />
        <span
          className="font-medium text-orange"
          style={{ fontSize: smallerThan568 ? 20 : 26 }}
        >
          GOVERNANCE
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-x-5">
        <div className="w-auto md:w-5/12 flex items-stretch">
          <ColoredTab></ColoredTab>
        </div>
        <div className="flex flex-col flex-grow justify-between  gap-y-5">
          <div className="flex flex-col h-full md:flex-row gap-x-5 gap-y-5">
            <TextTabLink
              title="Governance Forum"
              link="https://forum.acy.finance"
            >
              Participate by proposing upgrades and discussing the future of the
              protocol with the ACY community.
            </TextTabLink>
            <TextTabLink title="Governance Proposal">
              Participate by Voting on governance proposals in ACY DAO and view
              past proposals.
            </TextTabLink>
          </div>
          <SocialMedias></SocialMedias>
        </div>
      </div>
    </div>
  );
};

export default Governance;
