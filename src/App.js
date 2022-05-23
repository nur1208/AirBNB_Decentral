import { useWeb3Client } from "./useWeb3Client";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pagas/Home/Home";
function App() {
  useWeb3Client();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
