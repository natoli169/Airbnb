import React from "react";
import "./App.css";

import HouseProvider from "./context/house/HouseState";
import { Navbar } from "./components/navbar/index";
import { ExploreCards } from "./components/explore-cards/index";
import { Footer } from "./components/footer/index";
import { Host } from "./components/host";
import { Tour } from "./components/tour";
import { HouseDetail } from "./components/house-detail";
import { RentButton, BuyButton } from "./components/button";

function App() {
  return (
    <>
      <HouseProvider>
        <HouseDetail />
      </HouseProvider>
    </>
  );
}

export default App;
