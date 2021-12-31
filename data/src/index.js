import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 },
];

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

function List({ data = [], renderEmpty, renderItem }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List
      data={bigList}
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => (
        <div style={{ display: "flex" }}>
          <img src={item.avatar} alt={item.name} width={50} />
          <p>
            {item.name} - {item.email}
          </p>
        </div>
      )}
    />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
