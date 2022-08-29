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
        <div
          style={{
            width: "90%",
            height: "200px",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <h2 className="card__name">{name}</h2>
        <ul>
          {genres.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default Card;
