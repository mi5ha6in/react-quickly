import React from "react";
import ReactDOM from "react-dom";

fetch(`https://api.github.com/users/mi5ha6in`)
  .then((response) => response.json())
  .then(console.log)
  .catch(console.error);

ReactDOM.render(
  <React.StrictMode></React.StrictMode>,
  document.getElementById("root")
);
