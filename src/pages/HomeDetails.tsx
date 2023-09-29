import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Country } from "../types/Country";
import { ThemeContext } from "../context/ThemeContext";
import Arrow from "../components/Icons/Arrow";

export const HomeDetails = () => {
  const [items, setItems] = useState<Country[]>([]);

  const { name } = useParams();
  const navigate = useNavigate();
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${name}`)
      .then((res) => res.json())
      .then((results) => {
        setItems(results);
        console.log(results);
      });
  }, [name]);

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="w-full px-5 lg:px-20 mt-[30px]">
      <div
        className={`flex items-center px-8 shadow-md w-44 ${
          themeCtx?.darkMode ? "bg-[#2b3945] " : ""
        }`}
      >
        <Arrow />
        <button onClick={handleNavigate} className="p-3">
          Back
        </button>
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className="w-full h-[375.5px] flex flex-col mt-8 gap-14 md:flex-row lg:justify-center"
        >
          <section className="flex">
            <img src={item.flags.png} alt="" />
          </section>

          <section className="flex flex-col justify-between p-2 lg:w-[564.13px]">
            <h1 className="font-bold text-xl md:text-3xl">
              {item.name.common}
            </h1>

            <section className="flex flex-col justify-between gap-10 lg:flex-row">
              <div>
                <p>
                  <b>Native Name: </b>
                  {item.altSpellings[3]}
                </p>
                <p>
                  <b>Region: </b>
                  {item.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {item.subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {item.capital}
                </p>
              </div>

              <div>
                <p>
                  <b>Top Level Domain:</b> {item.tld}
                </p>
                <p>
                  <b>Currencies:</b>{" "}
                  {item.currencies[Object.keys(item.currencies)[0]].name}
                </p>
                <p>
                  <b>Languages:</b>{" "}
                  {item.languages[Object.keys(item.languages)[0]]}
                </p>
              </div>
            </section>

            <div className="flex flex-wrap items-center gap-3">
              <b>Border Countries:</b>
              {item.borders
                ? item.borders.map((item, index) => (
                    <Link to={`/${item.toLowerCase()}`} key={index}>
                      <div
                        className={`px-6 p-2 rounded-md shadow-lg ${
                          themeCtx?.darkMode ? "bg-[#2b3945]" : ""
                        }`}
                      >
                        {item}
                      </div>
                    </Link>
                  ))
                : "-"}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};
