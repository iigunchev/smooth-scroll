import React, { useState } from "react";



import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    
    <>
    {/* <CustomCursor /> */}

    <div className="main-container" id="main-container">
      <Navbar />
      <Header />
      <Featured />
      <About />
      <Gallery />
      <Footer />
    </div>
    </>
  )
}

export default Home