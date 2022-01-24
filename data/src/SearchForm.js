import React, { useState } from "react";

export function SearchForm({ login, onSearch }) {
  const [inputLogin, setInputLogin] = useState(login);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(inputLogin);
          setInputLogin("");
        }}
      >
        <input
          type="text"
          value={inputLogin}
          onChange={(event) => setInputLogin(event.target.value)}
        />
        <button type="submit">Поиск</button>
      </form>
    </>
  );
}
