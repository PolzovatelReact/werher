import "./App.css";
import { useStrate } from "react";
import CComponent from "./CComponents";
import TestOne from "./TestOne";
import MapContainer from "./MapGoogle";
import MyWether from "./MyWether";

//const api = {
// key: "",
// base: "",
//};

function App() {
  // const [search, setSearch] = useStrate("");
  //const [weather, setWeather] = useStrate;

  //const searchPressed = () => {
  // fetch(`${api.base} ${search} ${api.key}`);
  //};
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wether app </h1>
        <div>
          <input
          //  type="text"
          // placeholder="Enter city/town..."
          //  onChange={(e) => setSearch(e.target.value)}
          />
          <button> Search</button>
        </div>
        <p> </p>
        <p>32 F</p>
        <p>Sunny</p>
        <CComponent />
        <TestOne />
        <MapContainer />
        <MyWether />
      </header>
    </div>
  );
}

export default App;
