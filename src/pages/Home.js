import React from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ExploreCards } from "../components/explore-cards";

export const Home = () => {
  return (
    <>
      <Navbar />
      <ExploreCards />
      <Footer />
    </>
  );
};
