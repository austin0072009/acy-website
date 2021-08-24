import arrow from "../assets/arrow.png";
const TabLink = ({ title, content, link = "/", children }) => {
  return (
    <div
      onClick={() => {
        window.location.href = link;
      }}
      className="p-5 text-gray-100 rounded-md border-solid border-1 border border-orange grayscale filter hover:grayscale-0 cursor-pointer rounded-lg relative cursor-pointer"
    >
      <img
        alt="goto"
        src={arrow}
        style={{ width: 30, height: 30, right: 10, top: 10 }}
        className="absolute"
      />
      <div className="flex flex-col items-center">
        <h2>{title}</h2>
        <div className="hover:brightness-50">{children}</div>
        <div className="px-5 lg:px-10">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TabLink;
