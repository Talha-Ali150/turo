import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";
import Slider3 from "./components/Slider3";

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Heading />
      <Slider1 />
      <Slider2 />
      <Slider3 />
    </div>
  );
}

export default App;
