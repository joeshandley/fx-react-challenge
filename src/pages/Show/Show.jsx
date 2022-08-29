import React from "react";
import { useParams } from "react-router-dom";
import "./Show.scss";

const Show = ({ showsData }) => {
  const { id } = useParams();

  if (!showsData[id]) {
    return <div>Loading...</div>;
  }

  const show = showsData[id].show;

  return (
    <main className="show">
      <article className="show--left">
        <h1 className="show__title">{show.name}</h1>
        <img
          className="show__image"
          src={show.image.original}
          alt="show image"
        />
      </article>
      <article className="show--right">
        <h2>Summary:</h2>
        <p className="show__description">{show.summary.slice(3, -4)}</p>
      </article>
    </main>
  );
};

export default Show;
