/** @format */

import React from "react";
import Footer from "./components/Footer";
import Overview from "./components/Overview";
import Testimonials from "./components/Testimonials";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";

const App = () => {
  return (
    <React.Fragment>
      <TopNavbar />
      <Navbar />
      <ImageSlider />
      <Overview />
      <Testimonials />
      <Footer />
    </React.Fragment>
  );
};

export default App;
