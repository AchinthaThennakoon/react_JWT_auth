import "./App.css";
import NavbarComp from "./components/NavbarComp";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Home />
    </div>
  );
}

export default App;
