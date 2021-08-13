const LogoText = ({ LogoUrl, text }) => {
  return (
    <div className="flex flex-col items-center text-brown-100 p-3 rounded-md border-transparent border-2 hover:border-brown-100 cursor-pointer">
      <img src={LogoUrl} alt={text} className="py-3 w-12" />
      <p>{text}</p>
    </div>
  );
};

export default LogoText;
