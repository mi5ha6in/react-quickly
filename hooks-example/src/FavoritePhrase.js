import React, { useState, useEffect } from "react";

export default function FavoritePhrase() {
  const [value, setValue] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(value);
    setValue("");
  };

  useEffect(() => {
    console.log(`typing "${value}"`);
  }, [value]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  return (
    <>
      <label htmlFor="input-phrase">Favorite phrase:</label>
      <input
        id="input-phrase"
        value={value}
        placeholder={phrase}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}
