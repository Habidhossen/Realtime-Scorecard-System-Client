import React from "react";
import Banner from "../Banner/Banner";
import CurrentMatch from "../CurrentMatch/CurrentMatch";
import SportsNews from "../SportsNews/SportsNews";
import UpcomingMatch from "../UpcomingMatch/UpcomingMatch";

const Home = () => {
  return (
    <div>
      <Banner />
      <CurrentMatch />
      <UpcomingMatch />
      <SportsNews />
    </div>
  );
};

export default Home;
