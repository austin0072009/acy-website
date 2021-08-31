import arrow from "../assets/arrow_orange.png";
import style from "../css/animation.css";

const TextTabLink = ({ title, link = "/", children }) => {
  return (
    <div
      onClick={() => {
        window.location.href = link;
      }}
      style={{ zIndex: 0 }}
      className="w-auto md:w-1/2 moveTopRightOnHover text-gray-100 rounded-xl relative grayscale filter hover:grayscale-0 cursor-pointer"
    >
      <div
        className="absolute rounded-xl bg-orange w-full h-full opacity-10"
        style={{ zIndex: -1 }}
      ></div>
      <div className="relative" style={{ zIndex: 1 }}>
        <img
          alt="goto"
          src={arrow}
          style={{ width: 30, height: 30, right: 10, top: 10 }}
          className="absolute filter hover:grayscale-0 "
        />

        <div className="p-5 flex flex-col">
          <span
            style={{ fontSize: 28, marginBottom: 18 }}
            className="font-medium"
          >
            {title}
          </span>
          <span style={{ fontSize: 20 }}>{children}</span>
        </div>
      </div>
    </div>
  );
};

export default TextTabLink;
