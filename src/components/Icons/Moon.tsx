import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Moon = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={`${themeCtx?.darkMode ? "white" : ""}`}
      className="ionicon s-ion-icon w-4"
      viewBox="0 0 512 512"
    >
      <title>Moon</title>
      <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"></path>
    </svg>
  );
};

export default Moon;
