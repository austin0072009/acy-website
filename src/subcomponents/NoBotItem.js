import ListItemGreen from "../assets/bulletGreen.png";
import ListItemGray from "../assets/bulletGray.png";

const NoBotItem = ({ title, content, useGray }) => {
  return (
    <div className="flex items-center mb-10">
      <img
        src={useGray ? ListItemGray : ListItemGreen}
        alt="bullet"
        className="w-1/3"
      ></img>
      <div className="flex flex-col text-white">
        <h2 className="text-2xl mb-3">
          <b>{title}</b>
        </h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default NoBotItem;
