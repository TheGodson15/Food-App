import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function Home() {

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async ()=>{
    let response = await fetch('http://localhost:5000/api/foodData',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    console.log(response[0], response[1]);
  }

  useEffect(() => {
    loadData();
  },[]);
  





  return (
    <div className="Homepage ">
      <Navbar />
      <Slider />
      <Body />
      <Footer/>

    </div>
  );
}
