import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import linkedin from "../assets/linkedin.png";
import discord from "../assets/discord.png";
import medium from "../assets/medium.png";
import litepaper from "../assets/litepaper.png";
import forum from "../assets/forum.png";
import github from "../assets/github.png";
import gitbook from "../assets/gitbook.png";

import htwitter from "../assets/twitter_hover.png";
import htelegram from "../assets/telegram_hover.png";
import hlinkedin from "../assets/linkedin_hover.png";
import hdiscord from "../assets/discord_hover.png";
import hmedium from "../assets/medium_hover.png";
import hlitepaper from "../assets/litepaper_hover.png";
import hforum from "../assets/forum_hover.png";
import hgithub from "../assets/github_hover.png";
import hgitbook from "../assets/gitbook_hover.png";
import { LogoText } from "../subcomponents";

const Footer = () => {
  let list1 = [
    [twitter, htwitter, "Twitter", "https://www.twitter.com/ACYFinance"],
    [telegram, htelegram, "Telegram", "https://t.me/acyfinance"],
    [
      linkedin,
      hlinkedin,
      "Linkedin",
      "https://www.linkedin.com/company/acy-finance",
    ],
    [discord, hdiscord, "Discord", "https://www.discord.gg/qYQ5CJmH"],
    [medium, hmedium, "Medium", "https://www.medium.com/acy-finance"],
  ];

  let list2 = [
    [litepaper, hlitepaper, "Litepaper"],
    [forum, hforum, "Forum"],
    [github, hgithub, "Github", "https://github.com/ACY-Labs"],
    [
      gitbook,
      hgitbook,
      "Gitbook",
      "https://acy-finance.gitbook.io/acy-finance/",
    ],
  ];

  return (
    <div className="bg-brown-800 p-5 ">
      <div className="flex flex-col lg:flex-row mx-auto justify-between">
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              {list1.map((item) => (
                <LogoText
                  key={item[0]}
                  LogoUrl={item[0]}
                  hLogoUrl={item[1]}
                  text={item[2]}
                  url={item[3]}
                />
              ))}
            </div>
            <div className="flex flex-wrap">
              {list2.map((item) => (
                <LogoText
                  key={item[0]}
                  LogoUrl={item[0]}
                  hLogoUrl={item[1]}
                  text={item[2]}
                  url={item[3]}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="px-0 lg:px-10">
          <ul className="text-brown-100">
            <li className="my-5 mr-5 inline md:block hover:underline">
              <a href="/">Support</a>
            </li>
            <li className="my-5 mr-5 inline md:block hover:underline">
              <a href="/">Term of use</a>
            </li>
            <li className="my-5 mr-5 inline md:block hover:underline">
              <a href="/">Privacy policy</a>
            </li>
            <li className="my-5 mr-5 inline md:block hover:underline">
              <a href="/">Cookie policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
