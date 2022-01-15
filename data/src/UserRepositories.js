import React from "react";
import {Fetch} from "./Fetch";

export default function UserRepositories({
  login,
  selectedRepo,
  onSelect = (f) => f,
}) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
    />
  );
}
