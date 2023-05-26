import React from "react";
import Banner from "../Banner/Banner";
import CurrentMatch from "../CurrentMatch/CurrentMatch";
import SportsEvents from "../SportsEvents/SportsEvents";
import SportsNews from "../SportsNews/SportsNews";

const Home = () => {
  return (
    <div>
      <Banner />
      <CurrentMatch />
      <SportsEvents />
      <SportsNews />
    </div>
  );
};

export default Home;
