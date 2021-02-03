import logo from './logo.svg';
import './App.css';
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Nav">
          <Search />
        </div>
      </div>
      <Weather />
      <Forecast />
    </div>
  );
}

export default App;
