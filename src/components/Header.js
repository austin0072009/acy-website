import logo from "../assets/logo.svg";
import menuImg from "../assets/menu_orange.png";
import { Link } from "react-router-dom";
import style from "../css/animation.css";
import { useState, useMemo, useEffect } from "react";

const menuStyles = {
  position: "fixed",
  top: "3.5rem",
  backgroundColor: "#2A282E",
  color: "#D5D5D5",
  zIndex: 100,
};
const Header = ({ active, setActive }) => {
  let menu = useMemo(() => [
    "Ecosystem",
    "Foundation",
    "Community",
    "Developers",
    "Governance",
    "Support",
    "ACY Token",
    "ACY DAO",
    "About",
    "Tutorials",
  ]);

  let [atTop, setAtTop] = useState(true);
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? setAtTop(true) : setAtTop(false);

    return () => (window.onscroll = null);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: "#1B1B1C",
        borderBottom: atTop ? "" : "1px solid #615e63",
        zIndex: 99,
      }}
      onClick={(e) => {
        if (e.target.id === "menu") return;
        setActive(false);
      }}
      className="sticky top-0 max-h-12 px-4 sm:px-10 xl:px-24 lg:px-20 overflow-hidden py-3 flex justify-between relative"
    >
      <Link to="/">
        <img
          src={logo}
          style={{ width: "3%", minWidth: "40px", maxWidth: "100px" }}
          alt="logo"
          className="cursor-pointer rotateOnHover"
        />
      </Link>
      <div className="flex items-center justify-end relative">
        <div
          className={`rounded-xl bg-brown-500 p-5 transition-opacity ${
            active ? "opacity-100" : "hidden opacity-0"
          }`}
          style={menuStyles}
        >
          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            {menu.map((item) => (
              <span className="text-orange filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100 mr-3 cursor-pointer">
                {item}
              </span>
            ))}
          </div>
        </div>

        <img
          className="filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100 mr-3 cursor-pointer"
          id="menu"
          alt="menu"
          src={menuImg}
          style={{ width: "3%", minWidth: "40px", maxWidth: "100px" }}
          onClick={() => {
            setActive(!active);
          }}
        />
        <div className="py-1 px-5 border-3 border-solid border-orange rounded-2xl text-white">
          Launch APP
        </div>
      </div>
    </nav>
  );
};

export default Header;
