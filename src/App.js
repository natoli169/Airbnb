import React from "react";
import "./App.css";
import HouseState from "./context/house/HouseState";
import { Navbar } from "./components/navbar/index";
import { ExploreCards } from "./components/explore-cards/index";
import { Footer } from "./components/footer/index";
import { Host } from "./components/host";

function App() {
  return (
    <>
      <HouseState>
        <Host />
      </HouseState>
    </>
  );
}

export default App;
