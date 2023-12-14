import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function home() {
  return (
    <div className="Homepage ">
      <Navbar />
      <Slider />
      <Body />
      <Footer/>

    </div>
  );
}
