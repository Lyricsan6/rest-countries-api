import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Arrow = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 12L3 12"
        stroke={`${themeCtx?.darkMode ? "white" : "#121214"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 17L3 12L8 7"
        stroke={`${themeCtx?.darkMode ? "white" : "#121214"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Arrow;
