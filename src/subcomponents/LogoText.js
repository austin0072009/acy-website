const LogoText = ({ LogoUrl, text, url = null }) => {
  return (
    <div
      className="flex flex-col items-center text-brown-100 p-3 rounded-md border-transparent border-2 hover:border-brown-100 cursor-pointer"
      onClick={() => url && window.location.replace(url)}
    >
      <img src={LogoUrl} alt={text} className="py-3 w-10" />
      <p>{text}</p>
    </div>
  );
};

export default LogoText;
