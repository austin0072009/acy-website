const LogoText = ({ LogoUrl, text, url = null }) => {
  return (
    <div
      className="flex flex-col items-center text-brown-100 p-3 cursor-pointer filter brightness-125 grayscale-100  hover:grayscale-0"
      onClick={() => {
        if (url) window.location.href = url;
      }}
    >
      <img src={LogoUrl} alt={text} className="py-3 w-10" />
      <p>{text}</p>
    </div>
  );
};

export default LogoText;
