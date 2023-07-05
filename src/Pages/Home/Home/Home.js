import React from "react";
import Banner from "../Banner/Banner";
import LatestMatch from "../LatestMatch/LatestMatch";
import Matches from "../Matches/Matches";
import SportsEvents from "../SportsEvents/SportsEvents";
import SportsNews from "../SportsNews/SportsNews";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestMatch />
      <Matches />
      <SportsEvents />
      <SportsNews />
    </div>
  );
};

export default Home;
