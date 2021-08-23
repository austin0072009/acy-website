import arrow from "../assets/arrow.png";
const TabLink = ({ title, content, children }) => {
  return (
    <div className="p-5 text-gray-100 rounded-md border-solid border-1 border border-gray-100 rounded-lg relative">
      <img
        alt="goto"
        src={arrow}
        style={{ width: 30, height: 30, right: 10, top: 10 }}
        className="absolute"
      />
      <div className="flex flex-col items-center">
        <h2>{title}</h2>
        {children}
        <div className="px-10">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TabLink;
