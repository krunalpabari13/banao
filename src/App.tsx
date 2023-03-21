import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ChildRoute, ScrollToTop } from "./components/exports";
// import { routeNames } from "./pages/routes";

import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
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
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
