import React, { useEffect, useState } from "react";
import Carpentry from "../components/Carpentry";
import CCTVInstall from "../components/CCTVInstall";
import Construction from "../components/Construction";
import ElectricalServices from "../components/ElectricalServices";
import FireAlarm from "../components/FireAlarm";
import PaintingService from "../components/PaintingService";
import PlumbingService from "../components/PlumbingService";
import ServicesHero from "../components/ServicesHero";
import TileService from "../components/TileService";
import axios from "axios";

const Services = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    axios
      .get("https://backend.raghavbuildtech.com/services/")
      .then((response) => {
        // Handle the response data
        setServices(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }, []);

  console.log(services);

  return (
    <div className="Service-container">
      <ServicesHero />
      <ElectricalServices />
      <PlumbingService />
      <PaintingService />
      <TileService />
      <CCTVInstall />
      <Construction />
      <FireAlarm />
      <Carpentry />
    </div>
  );
};

export default Services;
