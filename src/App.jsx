/** @format */

import React from "react";
import './App.css';
import Footer from "./components/Footer";
import Overview from "./components/Overview";
import Testimonials from "./components/Testimonials";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
const App = () => {
  return (
    <React.Fragment>
      <TopNavbar />
      <Navbar />
      <ImageSlider />
      <Overview />
      <Testimonials />
      <AboutUs />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
};

export default App;
