import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Slider1 from "./components/Slider1";
import Heading from "./components/Heading";
import Slider2 from "./components/Slider2";

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Heading />
      <Slider1 />
      <Slider2 />
    </div>
  );
}

export default App;
