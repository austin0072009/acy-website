const TopicTextBordered = ({ title, content }) => {
  return (
    <div
      className="text-gray-100
      rounded-md
      border-solid border-1 border border-orange grayscale filter hover:grayscale-0
      rounded-lg p-5 mt-0"
    >
      <h2 className="mt-0">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TopicTextBordered;
