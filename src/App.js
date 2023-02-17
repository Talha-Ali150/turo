import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ImgMediaCard from "./components/Card";

import Carousel from "react-elastic-carousel";
import CarSlider from "./components/CarSlider";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Heading />
      <CarSlider />
    </div>
  );
}

export default App;
