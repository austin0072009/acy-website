import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import linkedin from "../assets/linkedin.png";
import discord from "../assets/discord.png";
import medium from "../assets/medium.png";
import youtube from "../assets/youtube.png";
import litepaper from "../assets/litepaper.png";
import forum from "../assets/forum.png";
import github from "../assets/github.png";
import gitbook from "../assets/gitbook.png";
import { LogoText } from "../subcomponents";

const Footer = () => {
  let list = [
    [twitter, "Twitter", "https://www.twitter.com/ACYFinance"],
    [telegram, "Telegram", "https://t.me/acyfinance"],
    [linkedin, "Linkedin", "https://www.linkedin.com/company/acy-finance"],
    [discord, "Discord", "https://www.discord.gg/qYQ5CJmH"],
    [medium, "Medium", "https://www.medium.com/acy-finance"],
    [youtube, "Youtube"],
    [litepaper, "Litepaper"],
    [forum, "Forum"],
    [github, "Github"],
    [gitbook, "Gitbook", "https://acy-finance.gitbook.io/acy-finance/"],
  ];
  return (
    <div className="bg-brown-800 p-5 ">
      <div className="flex flex-col lg:flex-row mx-auto justify-between">
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              {list.map((item) => (
                <LogoText LogoUrl={item[0]} text={item[1]} url={item[2]} />
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
