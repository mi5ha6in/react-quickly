import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify.data);

function GitHubUser({ login }) {
  const [data, setData] = useState();

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }

  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <GitHubUser login="mi5ha6in" />
  </React.StrictMode>,
  document.getElementById("root")
);
