import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import About from "../components/About";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About/>
      <Footer />
    </>
  );
};

export default Home;