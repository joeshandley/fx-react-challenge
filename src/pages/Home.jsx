import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export const Home = () => {
  const [showsData, setShowsData] = useState([]);
  const [showsCards, setShowsCards] = useState([]);

  const getTvShows = async () => {
    try {
      const res = await axios.get(
        "https://api.tvmaze.com/search/shows?q=green"
      );
      setShowsData(res.data);
      console.log(res.data);
      getCards(res.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const getCards = (shows) => {
    const cards = shows.map((show, i) => {
      console.log(show);
      return (
        <Card
          key={i}
          image={show.show.image.medium}
          name={show.show.name}
          home_port={show.show.type}
          roles={show.show.genres}
        />
      );
    });
    setShowsCards(cards);
  };

  useEffect(() => {
    getTvShows();
  }, []);

  return (
    <>
      <h1>TV Shows</h1>
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: "10px",
          columnGap: "20px",
        }}
      >
        {showsCards}
      </div>
    </>
  );
};

export default Home;
