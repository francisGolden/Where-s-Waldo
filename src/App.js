import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage";
import { BoxProvider } from "./context/Context";
import { useTimer } from "use-timer";


function App() {
  
  
  return (
    <div id="main-container">
      <BoxProvider>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BoxProvider>
    </div>
  );
}

export default App;
