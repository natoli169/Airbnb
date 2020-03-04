import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/index";
import { ExploreCards } from "./components/explore-cards/index";
import { Footer } from "./components/footer/index";

function App() {
  return (
    <>
      <Navbar />
      <ExploreCards />
      <Footer />
    </>
  );
}

export default App;
