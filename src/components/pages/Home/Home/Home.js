import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Contact from "../Contact/Contact";
import CustomerReview from "../CustomerReview/CustomerReview";
import Header from "../Header/Header";
import ServicesInfo from "../ServicesInfo/ServicesInfo";

const Home = () => {
  return (
    <div>
      <Header />
      <ServicesInfo />
      <CustomerReview />
      <Contact />
    </div>
  );
};

export default Home;
