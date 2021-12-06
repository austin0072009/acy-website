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
			title: "What is ACY Finance",
			content: `Learn about the core concepts of the 
                ACY protocol. Swaps, Pools, 
                Concentrated Liquidity and more.`,

			logoText: "Litepaper",
			src: litepaper,
			src_hover: hlitepaper,
			link: "https://api.acy.finance/ACY%20Finance%20Whitepaper.pdf",
		},
		{
			title: "Guides, Rules and FAQs",
			content: `Learn about the details of ACY Finance,
        including guides, product, governance rules, 
        tokenomics and FAQs.`,

			logoText: "GitBook",
			src: gitbook,
			src_hover: hgitbook,
			link: "https://acy-finance.gitbook.io/acy-finance/",
		},
		{
			title: "Smart contract overview",
			content: `Learn about the architecture of the 
        ACY protocol smart contracts made 
        up of the Core and Periphary libraries.`,

			logoText: "GitHub",
			src: github,
			src_hover: hgithub,
			link: "https://github.com/ACY-Labs",
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
			<div class="roadmap-title">Developer</div>

			<div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 md:gap-y-0 z-10" >
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
		</div>
	);
};

export default Documentation;
