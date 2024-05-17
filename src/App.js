import "./App.css";

import CComponent from "./CComponents";
import TestOne from "./TestOne";
import MyWether from "./MyWether";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ width: "700px" }}>
          Чтобы узнать текущую погоду, пожалуйста, введите название города в
          поле ввода ниже.
        </p>
        <MyWether />

        <h2>Каталог напитков</h2>
        <CComponent />
        <TestOne />
      </header>
    </div>
  );
}

export default App;
