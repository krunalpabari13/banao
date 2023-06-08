import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helper/ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GalleryDetails from "./components/GalleryDetails";
import WelcomeModal from "./components/WelcomeModal";

function App() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleWelcomeModal = () => {
    setShowWelcomeModal(false);
  };
  const ModalImageLoaded = () => {
    document.body.style.display = "block";
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WelcomeModal
        showWelcomeModal={showWelcomeModal}
        handleWelcomeModal={handleWelcomeModal}
        ModalImageLoaded={ModalImageLoaded}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:galleryId" element={<GalleryDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
