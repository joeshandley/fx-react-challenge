import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import dummyData from "../dummyData.json"; // To be replaced with your api response data

export const Home = () => {
  const [elephantData, setElephantData] = useState([]);

  const getElephants = async () => {
    try {
      const res = await axios.get(
        "https://elephant-api.herokuapp.com/elephants/random"
      );
      setElephantData(res.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    getElephants();
  }, []);

  return (
    <>
      <h1>Space X Ships</h1>
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: "10px",
          columnGap: "20px",
        }}
      >
        <Card
          image={dummyData.image}
          name={dummyData.name}
          home_port={dummyData.home_port}
          roles={dummyData.roles}
        />
        {/* <Card
          image={elephantData.image}
          name={elephantData.name}
          home_port={elephantData.affiliation}
          roles={elephantData.species}
        /> */}
      </div>
    </>
  );
};

export default Home;
