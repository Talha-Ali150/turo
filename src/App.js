import './App.css';
import Banner from './components/Banner';
import { ReactComponent as Logo } from './images/logo.svg';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="navbar">
        <Logo />
      </div>
      </div>
  );
}

export default App;
