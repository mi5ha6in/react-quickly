import React, { useState } from "react";
import GitHubUser from "./GitHubUser";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./ReactMarkdown";

export default function App() {
  const [login, setLogin] = useState();
  const [repo, setRepo] = useState();

  return (
    <>
      <GitHubUser login={login} onSearch={setLogin} />
      <UserRepositories login={login} repo={repo} onSelect={setRepo} />
      <RepositoryReadme login={login} repo={repo} />
    </>
  );
}
