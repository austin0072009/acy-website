import arrow from "../assets/arrow.png";

const TextTabLink = ({ title, link = "/", children }) => {
  return (
    <div
      onClick={() => {
        window.location.href = link;
      }}
      className="p-5 mb-3 text-gray-100 border-solid border-1 border border-gray-200 rounded-3xl relative filter hover:brightness-200 cursor-pointer"
    >
      <img
        alt="goto"
        src={arrow}
        style={{ width: 30, height: 30, right: 10, top: 10 }}
        className="absolute"
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
