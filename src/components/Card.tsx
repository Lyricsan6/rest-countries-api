import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Props = {
  img: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

const Card = ({ img, name, population, region, capital }: Props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div
      className={`shadow-xl w-[320px] h-[428px] rounded-lg sm:w-[400px] ${
        themeCtx?.darkMode ? "bg-[#2b3945]" : ""
      }`}
    >
      <div className="w-full h-[200px]">
        <img
          className="w-full h-full rounded-tl-lg rounded-tr-lg"
          src={img}
          alt=""
        />
      </div>

      <div className="p-6 text-lg flex flex-col gap-1">
        <p className="pb-5 text-2xl">
          <b>{name}</b>
        </p>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
