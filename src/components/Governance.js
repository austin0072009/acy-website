import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { ColoredTab, TextTabLink, SocialMedias } from ".";
import { AnimatedButtons, AnimatedIcons } from ".";
import { useMediaPredicate } from "react-media-hook";
import button7 from "../assets/svgs/animatedIcons/seven-key.json";
import button7hover from "../assets/svgs/animatedIcons/seven-key-hover.json";
import { useState } from "react";

const Governance = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	const [isHoverButtonSeven, setIsHoverButtonSeven] = useState(false);
	const [isClickedButtonSeven, setIsClickedButtonSeven] = useState(false);

	return (
		<div>
			<div className="flex">
				<div
					className="flex items-center text-gray-100 filter grayscale hover:grayscale-0 brightness-200 mb-5 hover:brightness-100 "
					onMouseEnter={() => {
						setIsHoverButtonSeven(true);
						setIsClickedButtonSeven(false);
					}}
					onMouseLeave={() => {
						setIsHoverButtonSeven(false);
						setIsClickedButtonSeven(false);
					}}
					onClick={() => {
						setIsHoverButtonSeven(!isHoverButtonSeven);
						setIsClickedButtonSeven(!isClickedButtonSeven);
					}}
				>
					{/* <AnimatedButtons
						url={button7}
						urlhover={button7hover}
						id="button7"
						hover={isHoverButtonSeven}
						click={isClickedButtonSeven}
					></AnimatedButtons> */}
					<span
						className="font-medium text-orange moveLROnHover"
						style={{ fontSize: smallerThan568 ? 20 : 26 }}
					>
						<span>GOVERNANCE</span>
					</span>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-x-5">
				<div className="w-auto md:w-5/12 flex items-stretch">
					<ColoredTab></ColoredTab>
				</div>
				<div className="flex flex-col flex-grow justify-between gap-y-5">
					<div className="flex flex-col h-full md:flex-row gap-x-5 gap-y-5">
						<TextTabLink
							title="Governance Forum"
							link="https://forum.acy.finance"
						>
							Participate by proposing upgrades and discussing the future of the
							protocol with the ACY community.
						</TextTabLink>
						<TextTabLink
							title="Governance Proposal"
							link="/governance"
							type="local"
						>
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
