import { Link, useLocation } from "react-router-dom";

let anchorStyle = {
  textDecoration: "none",
  fontWeight: 500,
};

const SideMenu = ({ title, entries, default_path }) => {
  let location = useLocation();

  return (
    <div className="flex flex-col text-gray-100 sticky top-0 pr-5">
      <p className="text-4xl">{title}</p>
      {entries.map((item, index) => (
        <Link key={item.link} style={anchorStyle} to={item.link}>
          <div
            className="pl-8 text-gray-100 my-5 text-lg md:text-xl lg:text-2xl hover:text-orange"
            style={{
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
