import React from 'react'
import BusinessSummary from '../components/BusinessSummary';
import Choose from '../components/Choose';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Greeting from '../components/Greeting';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import RecentWork from '../components/RecentWork';
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
      <RecentWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;