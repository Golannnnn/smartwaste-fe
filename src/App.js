import Map from "./components/Map";
import Results from "./components/Results";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import About from "./components/About";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div className="green-body">
        <Container maxW="7xl">
          <Navbar />
          <Home />
        </Container>
      </div>
      <Container maxW="7xl">
        <Results />
        <Map />
        <Rules />
      </Container>
      <div className="green-body">
        <Container maxW="7xl">
          <About />
        </Container>
      </div>
    </>
  );
}

export default App;
