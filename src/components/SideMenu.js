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
                  <div
                    className="pl-10 text-gray-100 my-3 text-base md:text-lg lg:text-xl hover:text-orange"
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
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default SideMenu;
