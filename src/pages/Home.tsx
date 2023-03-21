import React from 'react'
import Greeting from '../components/Greeting';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Greeting />
    </div>
  )
}

export default Home;