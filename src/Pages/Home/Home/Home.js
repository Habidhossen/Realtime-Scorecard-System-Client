import React from "react";
import Banner from "../Banner/Banner";
import LatestMatch from "../LatestMatch/LatestMatch";
import SportsEvents from "../SportsEvents/SportsEvents";
import SportsNews from "../SportsNews/SportsNews";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestMatch />
      <SportsEvents />
      <SportsNews />
    </div>
  );
};

export default Home;
