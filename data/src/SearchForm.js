import React from "react";

export function SearchForm({ login, onSearch }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(login);
          onSearch("")
        }}
      >
        <input
          type="text"
          value={login}
          onChange={(event) => onSearch(event.target.value)}
        />
        <button type="submit">Поиск</button>
      </form>
    </>
  );
}
