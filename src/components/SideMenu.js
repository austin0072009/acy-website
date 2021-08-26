import { Link, useLocation } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";

let anchorStyle = {
  textDecoration: "none",
  fontWeight: 500,
};

const SideMenu = ({ title, entries, default_path }) => {
  let location = useLocation();

  return (
    <div className="flex flex-col text-gray-100 sticky top-0 pr-5">
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex bg-transparent justify-between items-center w-full px-4 py-2 text-lg border-0 font-medium text-left text-gray-100 rounded-lg outline-none focus:outline-none">
              {title}
              <FaChevronUp
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-orange`}
              />
            </Disclosure.Button>
            <Disclosure.Panel>
              {entries.map((item, index) => (
                <Link key={item.link} style={anchorStyle} to={item.link}>
                  <div className="pl-10 text-gray-50 my-3  md:text-lg lg:text-xl hover:text-orange">
                    {location.pathname === item.link ||
                    (index === 0 && location.pathname === default_path) ? (
                      <div
                        style={{ color: "#ea5c1f" }}
                        className="transition-padding pb-0 hover:pb-4 inline-block border-solid border-t-0 border-l-0 border-r-0 border-b border-orange hover:border-orange"
                      >
                        {item.text}
                      </div>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                </Link>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default SideMenu;
