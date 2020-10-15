import React from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import ServicesInfo from "../ServicesInfo/ServicesInfo";
import AllCustomerReview from "../AllCustomerReview/AllCustomerReview";

const Home = () => {
  return (
    <div>
      <Header />
      <ServicesInfo />
      <AllCustomerReview />
      <Contact />
    </div>
  );
};

export default Home;
