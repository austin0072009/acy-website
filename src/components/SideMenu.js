import { Link, useLocation } from "react-router-dom";

let anchorStyle = {
  textDecoration: "none",
  fontWeight: 500,
};

const SideMenu = ({ title, entries, default_path }) => {
  let location = useLocation();

  return (
    <div
      className="flex md:flex-col flex-row text-gray-100 px-5"
      style={{ borderRight: "1px solid #615e63" }}
    >
      <p className="text-4xl">{title}</p>
      {entries.map((item, index) => (
        <Link key={item.link} style={anchorStyle} to={item.link}>
          <div
            className="pl-8 text-gray-100 my-5 text-2xl hover:text-orange"
            style={{
              minWidth: "200px",
              color:
                location.pathname === item.link ||
                (index === 0 && location.pathname === default_path)
                  ? "#de5b24"
                  : "#B5B6B6",
            }}
          >
            {item.text}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideMenu;
