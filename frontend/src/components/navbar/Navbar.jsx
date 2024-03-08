"use client";
import useRoutes from "@/hooks/useRoutes";

import toast from "react-hot-toast";
import DesktopItem from "./DesktopItem";

const Navbar = () => {
  const { navbarOptions } = useRoutes();
  return (
    <header
      id="page-header"
      className="flex flex-none items-center shadow-sm z-1 bg-gray-800"
    >
      <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between py-4">
          <div className="flex items-center">
            <a
              href="#"
              className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-100 hover:text-gray-300"
            >
              <span>Colegio ESPE</span>
            </a>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-5">
            <nav className="hidden lg:flex items-center space-x-2">
              {navbarOptions.map((item) => (
                <DesktopItem
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  active={item.active}
                  icon={item.icon}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
