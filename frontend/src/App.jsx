import { VStack } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
