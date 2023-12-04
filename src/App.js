import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainComponent from "./components/MainComponent";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MainComponent />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
