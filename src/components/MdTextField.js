import ReactMarkdown from "react-markdown";

const MdTextField = ({ text }) => {
  return (
    <div className="mx-2 my-5 sm:mx-5 lg:mx-10 xl:mx-20 px-2 sm:px-5 xl:px-20 lg:px-10">
      <div className="bg-brown-400 px-8 py-1 rounded text-white ">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MdTextField;
