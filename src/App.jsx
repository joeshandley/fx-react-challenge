import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Show from "./pages/Show/Show";
import "./global.scss";

const App = () => {
  const [showsData, setShowsData] = useState([]);

  const getTvShows = async () => {
    try {
      const res = await axios.get(
        "https://api.tvmaze.com/search/shows?q=green"
      );
      setShowsData(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    getTvShows();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <section>
            <Routes>
              <Route path={"/"} element={<Home showsData={showsData} />} />
              <Route
                path={"show/:id"}
                element={<Show showsData={showsData} />}
              />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
