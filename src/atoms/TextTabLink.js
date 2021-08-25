import arrow from "../assets/arrow_orange.png";
import style from "../css/animation.css";

const TextTabLink = ({ title, link = "/", children }) => {
  return (
    <div
      onClick={() => {
        window.location.href = link;
      }}
      className="p-5 mb-3 moveTopRightOnHover text-gray-100 border-solid border-1 rounded-xl relative border border-orange grayscale filter hover:grayscale-0 cursor-pointer"
    >
      <img
        alt="goto"
        src={arrow}
        style={{ width: 30, height: 30, right: 10, top: 10 }}
        className="absolute filter hover:grayscale-0 "
      />

      <div className="flex flex-col">
        <span
          style={{ fontSize: 28, marginBottom: 18 }}
          className="font-medium"
        >
          {title}
        </span>
        <span style={{ fontSize: 20 }}>{children}</span>
      </div>
    </div>
  );
};

export default TextTabLink;
