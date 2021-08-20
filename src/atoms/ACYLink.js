import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ACYLink = ({ url, children }) => {
  let [active, setActive] = useState(false);
  const location = useLocation();

  let anchorStyle = {
    textDecoration: "none",
    fontWeight: 500,
    color: active || location.pathname === url ? "#de5b24" : "white",
  };

  return (
    <span className="my-3 mx-3 px-3">
      <Link
        to={url}
        tabIndex="1"
        onClick={() => {
          scroll.scrollToTop();
        }}
        onMouseEnter={() => {
          setActive(true);
        }}
        onMouseLeave={() => {
          setActive(false);
        }}
        style={anchorStyle}
      >
        {children}
      </Link>
    </span>
  );
};

export default ACYLink;
