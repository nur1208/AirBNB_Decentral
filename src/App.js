import { useWeb3Client } from "./useWeb3Client";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pagas/Home/Home";
import { Icon, iconTypes } from "./components/Icon";
import { NotificationProvider } from "./components/Notification";

function App() {
  useWeb3Client();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/test"
        element={
          <NotificationProvider>
            <Home />
          </NotificationProvider>
        }
      />
    </Routes>
  );
}

export default App;
