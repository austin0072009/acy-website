import { useMemo } from "react";
import { LogoText } from "../atoms";
import twitter from "../assets/twitter_hover.png";
import telegram from "../assets/telegram_hover.png";
import linkedin from "../assets/linkedin_hover.png";
import discord from "../assets/discord_hover.png";
import medium from "../assets/medium_hover.png";
import youtube from "../assets/youtube_hover.png";

const SocialMedias = () => {
  let logos = useMemo(() => [
    [
      twitter,
      "Twitter",
      "https://www.twitter.com/ACYFinance",
      "Stay in the pulse",
    ],
    [telegram, "Telegram", "https://t.me/acyfinance", "Chat in the group"],
    [
      discord,
      "Discord",
      "https://www.discord.gg/qYQ5CJmH",
      "Hop in the dev-chat ",
    ],
    [
      medium,
      "Medium",
      "https://www.medium.com/acy-finance",
      "Detail in the blog",
    ],
    [
      linkedin,
      "Linkedin",
      "https://www.linkedin.com/company/acy-finance",
      "View open roles",
    ],
    [
      youtube,
      "YouTube",
      "https://www.linkedin.com/company/acy-finance",
      "Learn the tutorials",
    ],
  ]);
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mb-3 rounded-xl p-2">
      {logos.map((item) => (
        <LogoText LogoUrl={item[0]} text={item[1]} url={item[2]}>
          {item[3]}
        </LogoText>
      ))}
    </div>
  );
};

export default SocialMedias;
