import "./styles.css";
import React from "react";

var shoppingList = ["chicken", "mutton", "eggs", "bread"];

export default function App() {
  return (
    <div className="App">
      <h1>my shopping List</h1>
      <ol>
        {shoppingList.map((item, index) => {
          if (index % 2 != 0) return <li> {item} </li>;
          else return <li style={{ color: "gray" }}> {item} </li>;
        })}
      </ol>
    </div>
  );
}
