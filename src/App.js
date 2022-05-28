import { useWeb3Client } from "./useWeb3Client";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pagas/Home/Home";
import { Icon, iconTypes } from "./components/Icon";
import { NotificationProvider } from "./components/Notification";
import { Illustration } from "./components/Illustrations";
import { Select } from "./components/Select";

function App() {
  useWeb3Client();

  const options = [{ id: "some id", label: "some label" }];
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/test"
        // element={<Illustration logo="ethereum" />}
        element={<Select options={options} />}
      />
    </Routes>
  );
}

export default App;
