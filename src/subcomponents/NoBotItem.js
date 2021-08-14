import ListItem from "../assets/bullet.png";

const NoBotItem = ({ title, content }) => {
  return (
    <div className="flex items-center">
      <img src={ListItem} alt="bullet"></img>
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
