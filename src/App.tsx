import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ChildRoute, ScrollToTop } from "./components/exports";
// import { routeNames } from "./pages/routes";

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

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Routes>
        {/* <Route path="" element={<ChildRoute />}>
          <Route
            path={routeNames.Home.name}
            element={<routeNames.Home.component />}
          />
          <Route
            path={routeNames.Services.name}
            element={<routeNames.Services.component />}
          />
          <Route
            path={routeNames.AboutUs.name}
            element={<routeNames.AboutUs.component />}
          />
          <Route
            path={routeNames.Testimonials.name}
            element={<routeNames.Testimonials.component />}
          />
          <Route
            path={routeNames.Contact.name}
            element={<routeNames.Contact.component />}
          />
          <Route
            path={routeNames.PrivacyAndPolicy.name}
            element={<routeNames.PrivacyAndPolicy.component />}
          />
        </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
