import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

export default function App() {
  const [text, setText] = useState("Pink");

  return (
    <div className="content">
      <Button setText={setText}></Button>
      <div id="text">{text}</div>
    </div>
  );
}
