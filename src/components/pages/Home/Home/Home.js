import React from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import ServicesInfo from "../ServicesInfo/ServicesInfo";
import AllCustomerReview from "../AllCustomerReview/AllCustomerReview";
import SingleServiceInfo from "../SingleServiceInfo/SingleServiceInfo";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <SingleServiceInfo />
      <Slider />
      <AllCustomerReview />
      <Contact />
    </>
  );
};

export default Home;
