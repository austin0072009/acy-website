import arrow from "../assets/svgs/main/arrow.svg";
import style from "../css/animation.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const TextTabLink = ({ title, link = "/", type = "external", children }) => {
  let navigateButton = useRef(null);
  return (
    <div
      onClick={() => {
        console.log(navigateButton.current);
        type === "external"
          ? openInNewTab(link)
          : navigateButton.current.click();
      }}
      style={{ zIndex: 0 }}
      className="w-auto md:w-1/2 moveTopRightOnHover text-gray-100 rounded-xl relative grayscale filter hover:grayscale-0 cursor-pointer"
    >
      <Link to={link} ref={navigateButton} />
      <div
        className="absolute rounded-xl bg-orange w-full h-full opacity-10"
        style={{ zIndex: -1 }}
      ></div>
      <div
        className="relative h-full flex "
        style={{ zIndex: 1, alignItems: "stretch" }}
      >
        <img
          alt="goto"
          src={arrow}
          style={{ width: 30, height: 30, right: 10, top: 10 }}
          className="absolute filter hover:grayscale-0 "
        />

        <div className="p-5 flex flex-col justify-center ">
          <span
            style={{ fontSize: 28, marginBottom: 18 }}
            className="font-medium"
          >
            {title}
          </span>
          <p className="my-0">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default TextTabLink;
