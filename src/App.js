import Map from "./components/Map";
import Results from "./components/Results";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import About from "./components/About";
import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  const handleResult = (result) => {
    setResult(result);
  };

  useEffect(() => {
    if (result) {
      console.log(result);
    }
  }, [result]);

  return (
    <>
      <div className="green-body">
        <Navbar />
        <Container maxW="5xl">
          <Home handleResult={handleResult} result={result} />
        </Container>
      </div>
      <Container maxW="5xl">
        {result && (
          <>
            <Results result={result} />
            <Map result={result} />
          </>
        )}
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
