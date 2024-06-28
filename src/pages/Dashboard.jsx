import React from "react";
import Location from "../components/Location";
import Information from "../components/Information";
import AutoSlider from "../components/AutoSlider";
import Hero from "../components/hero/Hero";
import CategorySlider from "./CategorySlider";
import ch2 from "../assets/ch2.jpg";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <div className="container text-black mx-auto">
        <CategorySlider />
        <div className="p-8">
          <img src={ch2} alt="" className="rounded-2xl" />
        </div>
        <Information />
        <AutoSlider />
        <Location />
      </div>
    </>
  );
};

export default Dashboard;
