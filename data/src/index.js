import React from "react";
import ReactDOM from "react-dom";

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 },
];

function List({ data = [], renderEmpty }) {
  if (!data.length) return renderEmpty;
  return <p>{data.length} items</p>;
}

function App() {
  return (
    <List renderEmpty={<p>This list is empty</p>} />
    // <ul>
    //   {tahoe_peaks.map((peak, i) => (
    //     <li key={i}>
    //       {peak.name} - {peak.elevation.toLocaleString()}
    //     </li>
    //   ))}
    // </ul>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
