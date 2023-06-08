import React from "react";
import BusinessSummary from "../components/BusinessSummary";
import Choose from "../components/Choose";
import Contact from "../components/Contact";
import Greeting from "../components/Greeting";
import Hero from "../components/Hero";
import RecentWork from "../components/RecentWork";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Greeting />
      <Services />
      <BusinessSummary />
      <Choose />
      <RecentWork />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
