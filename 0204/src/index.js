import ReactDOM from "react-dom";
import React from "react";

function App() {
  return React.createContext("a", { href: "https://google.com" }, "Google");
}

ReactDOM.render("Teste", document.getElementById("root"));
