import React from "react";
import ReactDOM from "react-dom";

async function requestGithubUser(githubUser) {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUser}`);

    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

requestGithubUser("mi5ha6in");

ReactDOM.render(
  <React.StrictMode></React.StrictMode>,
  document.getElementById("root")
);
