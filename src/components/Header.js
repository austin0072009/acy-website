import menu from "../assets/menu.png";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="bg-brown-800 flex justify-between max-h-24">
      <img className="object-contain" src={logo} alt="logo" />
      <img className="object-contain max-w-max" src={menu} alt="menu" />
    </nav>
  );
};

export default Header;
