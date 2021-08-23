import { useMemo } from "react";
import { TabLink } from ".";
import { HorizontalLogo } from "../atoms";
import litepaper from "../assets/litepaper.png";
import hlitepaper from "../assets/litepaper_hover.png";
import gitbook from "../assets/gitbook.png";
import hgitbook from "../assets/gitbook_hover.png";
import github from "../assets/github.png";
import hgithub from "../assets/github_hover.png";
import arrowBullet from "../assets/arrow_bullet.png";

const Documentation = () => {
  let data = useMemo(() => [
    {
      title: "What is ACY Finance",
      content: `Learn about the core concepts of the 
                ACY protocol. Swaps, Pools, 
                Concentrated Liquidity and more.`,

      logoText: "Litepaper",
      src: litepaper,
      src_hover: hlitepaper,
    },
    {
      title: "Guides, Rules and FAQs",
      content: `Learn about the details of ACY Finance,
        including guides, product, governance rules, 
        tokenomics and FAQs.`,

      logoText: "GitBook",
      src: gitbook,
      src_hover: hgitbook,
    },
    {
      title: "Smart contract overview",
      content: `Learn about the architecture of the 
        ACY protocol smart contracts made 
        up of the Core and Periphary libraries.`,

      logoText: "GitHub",
      src: github,
      src_hover: hgithub,
    },
  ]);
  return (
    <div>
      <div className="flex items-center text-gray-100 mb-3">
        <img
          src={arrowBullet}
          style={{ maxWidth: 40 }}
          alt="arrow"
          className="mr-3"
        />
        <span className="text-2xl font-medium">DOCUMENTATION</span>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-5">
        {data.map((item) => (
          <TabLink title={item.title} content={item.content}>
            <HorizontalLogo
              src={item.src}
              src_hover={item.src_hover}
              logoText={item.logoText}
            ></HorizontalLogo>
          </TabLink>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
