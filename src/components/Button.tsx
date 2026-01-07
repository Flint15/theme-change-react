import { useState } from "react";
import "./Button.css";

export default function Button({
  setText,
}: {
  setText: (color: string) => void;
}) {
  const changeTheme = () => {
    if (document.body.classList.contains("blue")) {
      document.body.classList.remove("blue");
      setText("Pink");
      setColor("aqua");
      return;
    }
    document.body.classList.add("blue");
    setText("Blue");
    setColor("pink");
  };

  const [color, setColor] = useState("aqua");

  return (
    <button
      onClick={() => {
        changeTheme();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27px"
        height="27px"
        viewBox="0 -960 960 960"
        fill={color}
      >
        <path d="m480-120-58-52q-101-91-167-157T150-447q-39-53-54.5-97T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447q-39 53-105 119T538-172l-58 52Z" />
      </svg>
    </button>
  );
}
