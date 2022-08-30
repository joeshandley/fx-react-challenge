import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 *
 * @param props
 * @returns
 *
 */
const Card = ({ id, image, name, genres }) => {
  return (
    <Link to={`/show/${id}`}>
      <div className="card">
        <div className="card__img-container">
          {image ? <img className="card__img" src={image} /> : null}
        </div>
        <h2 className="card__name">{name}</h2>
        <ul className="card__genres">
          {genres.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default Card;
