import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Heading1 from "./components/Heading1";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";
import Slider3 from "./components/Slider3";
import Heading2 from "./components/Heading2";
import Image2 from "./components/Image2";
import Slider4 from "./components/Slider4";
import GiftCard from "./components/GiftCard";

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Heading1 />
      <Slider1 />
      <Slider2 />
      <Slider3 />
      <Heading2 />
      <Image2 />
      <Slider4 />
      <GiftCard />
    </div>
  );
}

export default App;
