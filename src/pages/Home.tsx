import React from 'react'
import BusinessSummary from '../components/BusinessSummary';
import Greeting from '../components/Greeting';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Greeting />
      <Services />
      <BusinessSummary />
    </div>
  )
}

export default Home;