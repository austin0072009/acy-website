const TopicTextBordered = ({ title, content }) => {
  return (
    <div
      className="text-gray-100
      rounded-md
      border-solid border-1 border border-orange grayscale filter hover:grayscale-0
      rounded-lg p-2 md:p-5 mt-0"
    >
      <h2 className="mt-0 text-base sm:text-lg md:text-2xl">{title}</h2>
      <p className="text-xs md:text-xl">{content}</p>
    </div>
  );
};

export default TopicTextBordered;
