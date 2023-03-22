import React from "react";
import Carpentry from "../components/Carpentry";
import CCTVInstall from "../components/CCTVInstall";
import Construction from "../components/Construction";
import ElectricalServices from "../components/ElectricalServices";
import FireAlarm from "../components/FireAlarm";
import PaintingService from "../components/PaintingService";
import PlumbingService from "../components/PlumbingService";
import ServicesHero from "../components/ServicesHero";
import TileService from "../components/TileService";

const Services = () => {
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