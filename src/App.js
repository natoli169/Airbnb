import React from "react";
import "./App.css";

import HouseProvider from "./context/house/HouseState";
import { Navbar } from "./components/navbar/index";
import { ExploreCards } from "./components/explore-cards/index";
import { Footer } from "./components/footer/index";
import { Host } from "./components/host";
import client from "./client";

function App() {
  return (
    <>
      <HouseProvider>
        <Host />
      </HouseProvider>
    </>
  );
}

export default App;
