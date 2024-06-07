import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Box className="App">
      <Home />
      <div className="scroll-snap scroll-down" style={{ height: "100vh" }}>
        test
      </div>
    </Box>
  );
}

export default App;
