import React, { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import "./Home.scss";

export const Home = ({ showsData, searchSubmitHandler }) => {
  const [showsCards, setShowsCards] = useState([]);

  const getCards = () => {
    const cards = showsData.map((show, i) => {
      return (
        <Card
          key={i}
          id={i}
          image={show.show.image ? show.show.image.medium : null}
          name={show.show.name}
          genres={show.show.genres}
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
      <h1 className="home__title">TV Shows</h1>
      <Search searchSubmitHandler={searchSubmitHandler} />
      <div className="home__cards">{showsCards}</div>
    </>
  );
};

export default Home;
