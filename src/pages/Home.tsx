import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { Country } from "../types/Country";
import Search from "../components/Icons/Search";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const themeCtx = useContext(ThemeContext);

  const [items, setItems] = useState<Country[]>([]);
  const [filteredItems, setFilteredItems] = useState<Country[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((results) => {
        setItems(results as Country[]);
        console.log(results);
      });
  };

  useEffect(() => {
    // se inputValue estiver vazio (!input value é verdadeiro) então será verificado o item que inclui o valor do input

    const result = items.filter(
      (item) =>
        (!inputValue ||
          item.name.common.toLowerCase().includes(inputValue.toLowerCase())) &&
        (!selectValue || item.region === selectValue)
    );

    setFilteredItems(result);
  }, [inputValue, items, selectValue]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <section className="py-12 px-6 lg:px-20">
      <form className="flex flex-col lg:flex-row lg:justify-between mb-8 lg:mb-16 ">
        <div
          className={`w-full max-w-[544px] h-14 flex items-center px-5 rounded-md shadow-md ${
            themeCtx?.darkMode ? "bg-[#2b3945]" : "bg-white"
          }`}
        >
          <Search />
          <input
            className="w-full h-full px-5 outline-none bg-transparent"
            type="text"
            placeholder="Search for a country..."
            onChange={handleChangeInput}
            value={inputValue}
          />
        </div>

        <select
          className={`w-full max-w-[180px] px-3 h-14 shadow-md rounded-md ${
            themeCtx?.darkMode ? "bg-[#2b3945]" : ""
          }`}
          onChange={handleChangeSelect}
          value={selectValue}
        >
          <option value="">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>

      <div className="flex flex-wrap justify-between gap-10">
        {filteredItems.map((item, index) => (
          <Link key={index} to={`${item.cca3.toLowerCase()}`}>
            <Card
              img={item.flags.png}
              name={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
