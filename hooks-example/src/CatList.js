import React, { useState, memo } from "react";

const Cat = ({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};

const PureCat = memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name
);

export default function CatList() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, index) => (
        <PureCat
          key={index}
          name={name}
          meow={(name) => console.log(`${name} has meowed`)}
        />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a Cat
      </button>
    </>
  );
}
