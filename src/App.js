import Map from "./components/Map";
import Results from "./components/Results";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Results />
      <Map />
      <Rules />
      <About />
    </div>
  );
}

export default App;
