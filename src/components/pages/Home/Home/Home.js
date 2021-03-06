import React from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import AllCustomerReview from "../AllCustomerReview/AllCustomerReview";
import SingleServiceInfo from "../SingleServiceInfo/SingleServiceInfo";
import Slider from "../Slider/Slider";
import Clients from "../Clients/Clients";

const Home = () => {
  document.title = "Welcome to Creative Agency";

  return (
    <>
      <Header />
      <Clients />
      <SingleServiceInfo />
      <Slider />
      <AllCustomerReview />
      <Contact />
    </>
  );
};

export default Home;
