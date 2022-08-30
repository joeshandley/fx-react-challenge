import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Show from "./pages/Show/Show";
import Footer from "./components/Footer/Footer";
import "./global.scss";

const App = () => {
  const [showsData, setShowsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getQuery = () => {
    if (!sessionStorage.getItem("searchQuery")) {
      sessionStorage.setItem("searchQuery", "green");
    }
    setSearchQuery(sessionStorage.getItem("searchQuery"));
  };

  const getTvShows = async () => {
    try {
      const res = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${searchQuery}`
      );
      setShowsData(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const query = e.target.query.value.trim();
    sessionStorage.setItem("searchQuery", query);
    setSearchQuery(query);
  };

  useEffect(() => {
    getQuery();
  }, []);

  useEffect(() => {
    getTvShows();
  }, [searchQuery]);

  if (searchQuery === "") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <section>
            <Routes>
              <Route
                path={"/"}
                element={
                  <Home
                    showsData={showsData}
                    searchSubmitHandler={searchSubmitHandler}
                  />
                }
              />
              <Route
                path={"show/:id"}
                element={<Show showsData={showsData} />}
              />
            </Routes>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
