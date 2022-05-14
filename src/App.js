import { useEffect, useState } from "react";
import { init, mintToken } from "./Web3Client";

function App() {
  useEffect(() => {
    (async () => {
      await init();
      const tx = await mintToken();
      console.log("working!!!");

      console.log({ tx });
    })();
  }, []);
  // const [balance, setBalance] = useState(0);

  // const mint = () => {};
  return <div className="App">app</div>;
}

export default App;
