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
import button5 from "../assets/svgs/animatedIcons/five-key.json";
import button5hover from "../assets/svgs/animatedIcons/five-key-hover.json";

const Documentation = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	const [isHoverButtonFive, setIsHoverButtonFive] = useState(false);
	const [isClickedButtonFive, setIsClickedButtonFive] = useState(false);

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
		<div className="my-20 ">
			<div className="flex">
				<div
					className="flex items-center text-gray-100 filter grayscale hover:grayscale-0 brightness-200 mb-5 hover:brightness-100 "
					onMouseEnter={() => {
						setIsHoverButtonFive(true);
						setIsClickedButtonFive(false);
					}}
					onMouseLeave={() => {
						setIsHoverButtonFive(false);
						setIsClickedButtonFive(false);
					}}
					onClick={() => {
						setIsHoverButtonFive(!isHoverButtonFive);
						setIsClickedButtonFive(!isClickedButtonFive);
					}}
				>
					<AnimatedButtons
						url={button5}
						urlhover={button5hover}
						id="button5"
						hover={isHoverButtonFive}
						click={isClickedButtonFive}
					></AnimatedButtons>
					<span
						className="font-medium text-orange moveLROnHover"
						style={{ fontSize: smallerThan568 ? 20 : 26 }}
					>
						<span>DOCUMENTATION</span>
					</span>
				</div>
			</div>
			<div className="grid md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-5 md:gap-y-0">
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
