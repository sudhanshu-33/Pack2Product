import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <>
      <Navbar logo={logo} />
      <Hero />
      <Card />
      <Footer />
    </>
  );
};

export default Home;