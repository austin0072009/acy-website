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
import support from "../assets/support.png";
import { LogoText, ACYLink } from "../atoms";

const Footer = () => {
  let list = [
    [litepaper, "Litepaper"],
    [forum, "Forum", "https://discourse.acy.finance"],
    [github, "Github", "https://github.com/ACY-Labs"],
    [gitbook, "Gitbook", "https://acy-finance.gitbook.io/acy-finance/"],
    [support, "Support", "https://t.me/acyfinance"],
    [twitter, "Twitter", "https://www.twitter.com/ACYFinance"],
    [telegram, "Telegram", "https://t.me/acyfinance"],
    [linkedin, "Linkedin", "https://www.linkedin.com/company/acy-finance"],
    [discord, "Discord", "https://www.discord.gg/qYQ5CJmH"],
    [medium, "Medium", "https://www.medium.com/acy-finance"],
  ];

  return (
    <div className="bg-brown-800 p-5">
      <div className="flex justify-start md:justify-center">
        <div className="px-0 lg:pl-10 h-1/2">
          <div className="flex flex-col md:flex-row justify-between p-3 h-full">
            <ACYLink url="/about-us">ABOUT</ACYLink>
            <ACYLink url="/terms-of-use">TERMS</ACYLink>
            <ACYLink url="/privacy-policy">PRIVACY</ACYLink>
            <ACYLink url="/cookie-policy">COOKIE</ACYLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-start">
          {list.map((item) => (
            <LogoText
              key={item[0]}
              LogoUrl={item[0]}
              text={item[1]}
              url={item[2]}
            />
          ))}
        </div>
      </div>
      <p className="text-center" style={{ color: "#c9d2d8" }}>
        &copy; 2021 ACY Foundation. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
