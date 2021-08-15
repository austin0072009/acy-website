// import twitter from "../assets/twitter.png";
import twitter from "../assets/twitter_hover.png";
import telegram from "../assets/telegram_hover.png";
import linkedin from "../assets/linkedin_hover.png";
import discord from "../assets/discord_hover.png";
import medium from "../assets/medium_hover.png";
import litepaper from "../assets/litepaper_hover.png";
import forum from "../assets/forum_hover.png";
import github from "../assets/github_hover.png";
import gitbook from "../assets/gitbook_hover.png";
import { LogoText } from "../subcomponents";
import { isMobile } from "react-device-detect";

const Footer = () => {
  let list1 = [
    [twitter, "Twitter", "https://www.twitter.com/ACYFinance"],
    [telegram, "Telegram", "https://t.me/acyfinance"],
    [linkedin, "Linkedin", "https://www.linkedin.com/company/acy-finance"],
    [discord, "Discord", "https://www.discord.gg/qYQ5CJmH"],
    [medium, "Medium", "https://www.medium.com/acy-finance"],
  ];

  let list2 = [
    [litepaper, "Litepaper"],
    [forum, "Forum"],
    [github, "Github", "https://github.com/ACY-Labs"],
    [gitbook, "Gitbook", "https://acy-finance.gitbook.io/acy-finance/"],
  ];

  return (
    <div className="bg-brown-800 p-5 ">
      <div className="flex flex-col lg:flex-row mx-auto justify-between">
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-between">
              {list1.map((item) => (
                <LogoText
                  key={item[0]}
                  LogoUrl={item[0]}
                  text={item[1]}
                  url={item[2]}
                />
              ))}
              {isMobile &&
                list2.map((item) => (
                  <LogoText
                    key={item[0]}
                    LogoUrl={item[0]}
                    text={item[1]}
                    url={item[2]}
                  />
                ))}
            </div>
            {!isMobile && (
              <div className="flex flex-wrap">
                {list2.map((item) => (
                  <LogoText
                    key={item[0]}
                    LogoUrl={item[0]}
                    text={item[1]}
                    url={item[2]}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="px-0 lg:px-10">
          <div className="flex justify-between md:flex-col text-brown-100 p-3">
            <span className="my-3 mr-5 hover:underline">
              <a href="/">Support</a>
            </span>
            <span className="my-3 mr-5 hover:underline">
              <a href="/">Term of use</a>
            </span>
            <span className="my-3 mr-5 hover:underline">
              <a href="/">Privacy policy</a>
            </span>
            <span className="my-3 mr-5 hover:underline">
              <a href="/">Cookie policy</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
