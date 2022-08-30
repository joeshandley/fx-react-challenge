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
        <h2 className="show__subtitle">
          {show.premiered && show.ended
            ? `${show.premiered.substr(0, 4)} - ${show.ended.substr(0, 4)}`
            : ""}
        </h2>
        {show.image ? (
          <img
            className="show__img"
            src={show.image.original}
            alt="show image"
          />
        ) : (
          <div className="show__img--not-found">Image not found</div>
        )}
      </article>
      <article className="show--right">
        {show.rating.average ? (
          <p className="show__rating">
            <b>Rating:</b> {show.rating.average}/10
          </p>
        ) : null}
        <h2 className="show__subtitle">Summary:</h2>
        <p className="show__description">
          {show.summary.slice(3, -4).replace("<b>", "").replace("</b>", "")}
        </p>
        <a className="show__more-info" href={show.url}>
          More info
        </a>
      </article>
    </main>
  );
};

export default Show;
