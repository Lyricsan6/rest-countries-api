import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Moon from "../components/Icons/Moon";

const Navbar = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <header
      className={`px-5 w-full h-24 flex items-center justify-between shadow-lg lg:px-20 ${
        themeCtx?.darkMode
          ? "bg-[#px-5 w-full h-24 flex items-center justify-between shadow-lg lg:px-20]"
          : ""
      }`}
    >
      <h1 className="font-bold text-lg lg:text-2xl">Where in the world?</h1>

      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={themeCtx?.toggleTheme}
      >
        <Moon />
        <p className="font-semibold">Dark Mode</p>
      </div>
    </header>
  );
};

export default Navbar;
