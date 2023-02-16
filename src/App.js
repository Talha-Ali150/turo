import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import ImgMediaCard from './components/Card'

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      {/* <div className='mainImg'>
      </div> */}
      <ImgMediaCard />
      
      </div>
  );
}

export default App;
