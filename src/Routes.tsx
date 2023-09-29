import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { HomeDetails } from "./pages/HomeDetails";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":name" element={<HomeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
