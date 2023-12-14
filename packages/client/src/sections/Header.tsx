import { useState } from "react";
import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { setAuth } = useAuth();
  const [navMenu, setNavMenu] = useState<boolean>(false);

  return (
    <header className="bg-gray-950 text-white fixed w-full top-0 z-[1000] border-b border-solid border-b-gray-700">
      <nav className="h-16  flex items-center justify-between px-5">
        <h1 className="font-bold text-2xl">
          <Link to="/">BlackCoffer</Link>
        </h1>
        <div
          className="relative"
          tabIndex={0}
          onClick={() => setNavMenu((prev) => !prev)}
          onBlur={(e) => {
            if (e.currentTarget.contains(e.relatedTarget)) return;
            setNavMenu(false);
          }}
        >
          <div className="hover:bg-gray-800 py-2 px-3 rounded-md cursor-pointer">
            Hey, Admin 👋
          </div>
          {navMenu && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-12 right-0 w-32 bg-gray-800 p-1 rounded-md"
            >
              <button
                className="w-full hover:bg-gray-900 px-3 py-2 rounded-md"
                onClick={() => setAuth({ email: "" })}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
