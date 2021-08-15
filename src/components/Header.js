import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="bg-brown-800 flex justify-start max-h-12 px-4 sm:px-10 lg:px-20 xl:px-48">
      <img className="object-left object-contain" src={logo} alt="logo" />
    </nav>
  );
};

export default Header;
