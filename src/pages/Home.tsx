import React from 'react'
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
    </div>
  )
}

export default Home;