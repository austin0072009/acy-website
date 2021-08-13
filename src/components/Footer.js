import {
  FaDiscord,
  FaYoutube,
  FaTelegram,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import telegram from "../assets/telegram.png";
import { LogoText } from "../subcomponents";

const Footer = () => {
  let list = [
    [telegram, "Telegram"],
    [telegram, "Telegram"],
    [telegram, "Telegram"],
    [telegram, "Telegram"],
    [telegram, "Telegram"],
    [telegram, "Telegram"],
    [telegram, "Telegram"],
    [telegram, "Telegram"],
    [telegram, "Telegram"],
  ];
  return (
    <div className="bg-brown-800 p-5 ">
      <div className="flex mx-auto justify-between">
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex">
              {list.map((item) => (
                <LogoText LogoUrl={item[0]} text={item[1]} />
              ))}
            </div>
            <div className="flex">
              {list.map((item) => (
                <LogoText LogoUrl={item[0]} text={item[1]} />
              ))}
            </div>
          </div>
        </div>
        <div className="px-10">
          <ul className="text-brown-100">
            <li className="my-5 hover:underline">
              <a href="/">Support</a>
            </li>
            <li className="my-5 hover:underline">
              <a href="/">Term of use</a>
            </li>
            <li className="my-5 hover:underline">
              <a href="/">Privacy policy</a>
            </li>
            <li className="my-5 hover:underline">
              <a href="/">Cookie policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
