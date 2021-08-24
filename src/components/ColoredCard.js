let shadow = {
  textShadow: "1px 1px 2px black",
};

const ColoredCard = ({ title, content }) => {
  return (
    <div className="bg-advantage-bg bg-cover text-white flex justify-center rounded-lg my-10 py-5 shadow-md">
      <div className="w-2/3 text-center">
        <h2 style={shadow}>{title}</h2>
        <p className="px-10 text-xl" style={shadow}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default ColoredCard;
