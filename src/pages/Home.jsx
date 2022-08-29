import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export const Home = ({ showsData }) => {
  const [showsCards, setShowsCards] = useState([]);

  const getCards = () => {
    const cards = showsData.map((show, i) => {
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
    getCards();
  }, [showsData]);

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
