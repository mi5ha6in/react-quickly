import React, { useState } from "react";

const Cat = ({ name }) => {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
};

export default function CatList() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, index) => (
        <Cat key={index} name={name} />
      ))}
      <button onClick={() => setCats([...cats, prompt('Name a cat')])}>
        Add a Cat
      </button>
    </>
  )
}
