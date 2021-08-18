import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="max-h-12 mx-2 sm:mx-5 lg:mx-10 xl:mx-20 px-2 sm:px-5 xl:px-20 lg:px-10 overflow-hidden">
      <img src={logo} style={{ maxWidth: "8%" }} alt="logo" />
    </nav>
  );
};

export default Header;
