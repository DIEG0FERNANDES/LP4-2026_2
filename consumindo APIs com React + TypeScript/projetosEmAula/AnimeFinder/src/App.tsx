import { useEffect, useState } from "react";
import "./App.css";
import AnimeCard from "./components/AnimeCard";
import type { Anime } from "./types/anime";
import { getAnimes } from "./services/KistuAPI";

function App() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  async function loadAnimes() {
    try {
      const response = await getAnimes(search, category);
      setAnimes(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadAnimes();
  }, []);

  return (
    <div className="container">
      <h1>Catálogo de Animes - Kitsu API</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Buscar anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Todas categorias</option>
          <option value="adventure">Adventure</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="romance">Romance</option>
        </select>

        <button onClick={loadAnimes}>Pesquisar</button>
      </div>

      <div className="grid">
        {animes.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

export default App;
