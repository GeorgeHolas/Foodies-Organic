import React from "react"
import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import HotDeserts from "./components/HotDeserts/HotDeserts";
import Banner from "./components/Banner/Banner";
import PopularMeals from "./components/PopularMeals/PopularMeals";
import Recommendation from "./components/Recommendation/Recommendation";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <NavBar />
        <Hero />
      </div>
      <HotDeserts />
      <Banner />
      <PopularMeals />
      <Recommendation />
      <Footer />
    </div>
  );
};

export default App;