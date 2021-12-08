import { useMemo } from "react";
import { TabLink } from ".";
import { AnimatedButtons, AnimatedIcons } from ".";
import litepaper from "../assets/svgs/main/documentation/litepaper.svg";
import hlitepaper from "../assets/litepaper_hover.png";
import gitbook from "../assets/svgs/main/documentation/gitbook.svg";
import hgitbook from "../assets/gitbook_hover.png";
import github from "../assets/svgs/main/documentation/github.svg";
import hgithub from "../assets/github_hover.png";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import rocketicon from "../assets/rocket_white_36dp.svg";
import fileppt from "../assets/file-ppt.svg";
import whitepaper2 from "../assets/history_edu_white_36dp.svg";
import { useMediaPredicate } from "react-media-hook";
import style from "../css/animation.css";
import { useState } from "react";
import button6 from "../assets/svgs/animatedIcons/six-key.json";
import button6hover from "../assets/svgs/animatedIcons/six-key-hover.json";
import "./RoadMap.css";

const Documentation = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	const [isHoverButtonSix, setIsHoverButtonSix] = useState(false);
	const [isClickedButtonSix, setIsClickedButtonSix] = useState(false);

	let data = useMemo(() => [
		{
			title: "Whitepaper",
			content: `Learn about the core concepts of the 
                ACY protocol. Swaps, Pools, 
                Concentrated Liquidity and more.`,

			logoText: "Whitepaper",
			src: whitepaper2,
			src_hover: whitepaper2,
			link: " https://docs.google.com/document/d/1tfGj9AOgvZxBNRg1hzQeb6E3t1dj1aKFMhh6nL5ukDY/edit?usp=sharing",
		},
		{
			title: "Guide",
			content: `Learn about the details of ACY Finance,
        including guides, product, governance rules, 
        tokenomics and FAQs.`,

			logoText: "Guide",
			src: gitbook,
			src_hover: hgitbook,
			link: "https://docs.google.com/document/d/1NHsCaGWl_gz6fUA5wZtNOJKRaOIxBrLlfoSsa52VQNw/edit?usp=sharing",
		},
		{
			title: "Smart Contract",
			content: `Learn about the architecture of the 
        ACY protocol smart contracts made 
        up of the Core and Periphary libraries.`,

			logoText: "GitHub",
			src: github,
			src_hover: hgithub,
			link: "https://github.com/ACY-Labs",
		},
	]);

	let data2 = useMemo(() => [
		{
			title: "Token Matrix",
			content: ` Learn about the token economics, investing situation, TGE and vesting rules.`,

			logoText: "Token Matrix",
			src: litepaper,
			src_hover: hlitepaper,
			link: "https://docs.google.com/document/d/1y3p9WZ5Oa_kOJWEuU1Gh25xEmmMReIcw/edit#",
		},
		{
			title: "Deck",
			content: `Learn about the technical innovation, core functions, and the comparative advantage.`,

			logoText: "Deck",
			src: fileppt,
			src_hover: fileppt,
			link: "https://docs.google.com/presentation/d/1xEMXwk-ps7I2vmf8I-1FyGBnICMbPefY/edit?usp=sharing&ouid=116957882165852887712&rtpof=true&sd=true",
		},
		{
			title: "IDO Launchpad",
			content: `Learn about the ACY IDO details including the allocations and starting dates in each launchpad.`,

			logoText: "IDO Launchpad",
			src: rocketicon,
			src_hover: rocketicon,
			link: "https://docs.google.com/spreadsheets/d/1eNLt6EoUH-y2lNml9_K4LPoKEBcicPbbNw_RCO4b7YA/edit?usp=sharing",
		},
	]);
	return (
		<div className="mb-40 developer">
			{/* <div
					className="flex items-center text-gray-100 filter grayscale hover:grayscale-0 brightness-200 mb-5 hover:brightness-100 "
					onMouseEnter={() => {
						setIsHoverButtonSix(true);
						setIsClickedButtonSix(false);
					}}
					onMouseLeave={() => {
						setIsHoverButtonSix(false);
						setIsClickedButtonSix(false);
					}}
					onClick={() => {
						setIsHoverButtonSix(!isHoverButtonSix);
						setIsClickedButtonSix(!isClickedButtonSix);
					}}
				> */}
			{/* <AnimatedButtons
						url={button6}
						urlhover={button6hover}
						id="button6"
						hover={isHoverButtonSix}
						click={isClickedButtonSix}
					></AnimatedButtons> */}
			{/* <span
						className="font-medium text-orange moveLROnHover"
						style={{ fontSize: smallerThan568 ? 20 : 26 }}
					>
						<span>DOCUMENTATION</span>
					</span>
				</div> */}
			<div class="roadmap-title z-10" >DOCUMENTATION</div>
			<div className = "DocumentationBar">
			<div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 md:gap-y-0 z-10 mt-1" >
				{data.map(item => (
					<TabLink
						key={item.title}
						title={item.title}
						content={item.content}
						link={item.link}
						src={item.src}
						src_hover={item.src_hover}
						logoText={item.logoText}
					></TabLink>
				))}
			</div>
			<div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 md:gap-y-0 z-10 mt-5" >
				{data2.map(item => (
					<TabLink
						key={item.title}
						title={item.title}
						content={item.content}
						link={item.link}
						src={item.src}
						src_hover={item.src_hover}
						logoText={item.logoText}
					></TabLink>
				))}
			</div>
			</div>
		</div>
	);
};

export default Documentation;
