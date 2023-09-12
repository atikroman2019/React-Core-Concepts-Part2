import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./users";
import Friends from "./Friends";
import Friend from "./Friend";
function App() {
  function handleClick() {
    alert("clicked");
  }
  const handleClick2 = () => {
    alert("clicked2");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h2>React Core Concepts Part2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Button2</button>
      <button
        onClick={() => {
          alert("third Clicked");
        }}
      >
        Button3
      </button>
      <button onClick={() => addToFive(3)}>four</button>
    </>
  );
}

export default App;
