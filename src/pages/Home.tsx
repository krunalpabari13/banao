import React from 'react'
import BusinessSummary from '../components/BusinessSummary';
import Choose from '../components/Choose';
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
      <Choose />
    </div>
  )
}

export default Home;