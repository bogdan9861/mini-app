import { useEffect, useState } from "react";
import "./App.css";

import hamster from "./assets/hamster.png";

const tg = window.Telegram.WebApp;

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    tg.ready();
  }, []);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className="inner">
        <div className="counter">{count}</div>
        <button onClick={onClick}>
          <img src={hamster} />
        </button>
      </div>
    </div>
  );
}

export default App;
