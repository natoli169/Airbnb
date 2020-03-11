import React from "react";
import "./App.css";
import {Navbar} from "./components/layouts/navbar";
import {Footer} from "./components/layouts/footer";
import {ExploreCard} from "./components/landing-page/explore-card";
import {AdventureCard} from "./components/landing-page/adventure-card";
import {PlacesCard} from "./components/landing-page/places-card";

function App() {
    return (
        <>
            <Navbar/>
            <ExploreCard/>
            <AdventureCard/>
            <PlacesCard/>
            <Footer/>
        </>
    );
}

export default App;
