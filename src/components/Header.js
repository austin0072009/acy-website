import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="max-h-12 mx-2 sm:mx-5 lg:mx-10 xl:mx-12 px-2 sm:px-5 xl:px-12 lg:px-10 overflow-hidden">
      <Link to="/">
        <img
          src={logo}
          style={{ width: "10%", minWidth: "80px", maxWidth: "100px" }}
          alt="logo"
          className="cursor-pointer"
        />
      </Link>
    </nav>
  );
};

export default Header;
