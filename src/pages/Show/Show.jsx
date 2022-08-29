import React from "react";
import { useParams } from "react-router-dom";

const Show = ({ showsData }) => {
  const { id } = useParams();

  if (!showsData[id]) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{showsData[id].show.name}</h1>
    </div>
  );
};

export default Show;
