import { useState } from "react";

export default function App() {
  const [articles, setArticles] = useState([
    "Le 10 spiagge più belle del Mediterraneo",
    "Weekend low cost in Europa",
    "Viaggio on the road negli Stati Uniti",
    "I borghi più suggestivi d’Italia",
    "Consigli per viaggiare sicuri durante le vacanze"
  ]);

  // Stato per l'input del form
  const [newArticle, setNewArticle] = useState("");

  // Funzione chiamata al submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newArticle.trim() === "") return;
    setArticles([...articles, newArticle]);
    setNewArticle("");
  };

  return (
    <div className="container">
      <h1>React Form</h1>

      {/* Lista articoli */}
      <ul className="articles-list">
        {articles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>

      {/* Form per aggiungere articoli */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserisci il titolo dell'articolo"
          value={newArticle}
          onChange={(e) => setNewArticle(e.target.value)}
        />
        <button type="submit">Aggiungi</button>
      </form>
    </div>
  );
}