import { useState } from "react";

export default function App() {
  const articles = [
  "Le 10 spiagge più belle del Mediterraneo",
  "Weekend low cost in Europa",
  "Viaggio on the road negli Stati Uniti",
  "I borghi più suggestivi d’Italia",
  "Consigli per viaggiare sicuri durante le vacanze"
];

  return (
    <div className="container">
      <h1>React Form</h1>

      <ul className="articles-list">
        {articles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}