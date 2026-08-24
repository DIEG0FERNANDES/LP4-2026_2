import { useState } from "react";
import { Header } from "../../components";
import "./index.css";

type Movie = {
  id: number;
  title: string;
  genre: string;
  year: number;
  image: string;
};

const destaque: Movie[] = [
  {
    id: 1,
    title: "Homem-Aranha: Um Novo Dia",
    genre: "Ação/Fantasia",
    year: 2026,
    image: "https://image.tmdb.org/t/p/w500/spiderman-new-day-2026-poster.jpg",
  },
  {
    id: 2,
    title: "Quarteto Fantástico",
    genre: "Ação/Ficção Científica",
    year: 2026,
    image: "https://image.tmdb.org/t/p/w500/fantastic-four-2026-poster.jpg",
  },
  {
    id: 3,
    title: "Rango",
    genre: "Animação/Comédia",
    year: 2011,
    image: "https://image.tmdb.org/t/p/w500/rango-2011-poster.jpg",
  },
  {
    id: 4,
    title: "O Hobbit: A Jornada Perdida",
    genre: "Fantasia/Aventura",
    year: 2026,
    image: "https://image.tmdb.org/t/p/w500/hobbit-journey-2026-poster.jpg",
  },
  {
    id: 5,
    title: "Demon Slayer: Infinity Castle",
    genre: "Anime/Ação",
    year: 2026,
    image:
      "https://image.tmdb.org/t/p/w500/demonslayer-infinity-castle-2026.jpg",
  },
  {
    id: 6,
    title: "Bionicle – O Retorno das Lendas",
    genre: "Animação/Aventura",
    year: 2026,
    image: "https://image.tmdb.org/t/p/w500/bionicle-return-legends-2026.jpg",
  },
  {
    id: 7,
    title: "Supergirl",
    genre: "Ação/Fantasia",
    year: 2026,
    image: "https://image.tmdb.org/t/p/w500/supergirl-2026-poster.jpg",
  },
  {
    id: 8,
    title: "Superman",
    genre: "Ação/Fantasia",
    year: 2026,
    image: "https://image.tmdb.org/t/p/w500/superman-2026-poster.jpg",
  },
];

const favoritos: Movie[] = [
  {
    id: 9,
    title: "O Hobbit",
    genre: "Fantasia/Aventura",
    year: 2012,
    image: "https://image.tmdb.org/t/p/w500/hobbit-2012-poster.jpg",
  },
  {
    id: 10,
    title: "Avengers: Ultimato",
    genre: "Ação/Ficção Científica",
    year: 2019,
    image: "https://image.tmdb.org/t/p/w500/avengers-endgame-2019-poster.jpg",
  },
  {
    id: 11,
    title: "Homem-Aranha: Novo Dia",
    genre: "Ação/Fantasia",
    year: 2021,
    image: "https://image.tmdb.org/t/p/w500/spiderman-new-day-2021.jpg",
  },
  {
    id: 12,
    title: "Demon Slayer",
    genre: "Anime/Ação",
    year: 2019,
    image: "https://image.tmdb.org/t/p/w500/demonslayer-2019-poster.jpg",
  },
  {
    id: 13,
    title: "Bionicles",
    genre: "Animação/Aventura",
    year: 2003,
    image: "https://image.tmdb.org/t/p/w500/bionicle-2003-poster.jpg",
  },
];

const animesBons: Movie[] = [
  {
    id: 14,
    title: "Your Name",
    genre: "Romance/Fantasia",
    year: 2016,
    image: "https://image.tmdb.org/t/p/w500/your-name-2016-poster.jpg",
  },
  {
    id: 15,
    title: "A Voz do Silêncio",
    genre: "Drama",
    year: 2016,
    image: "https://image.tmdb.org/t/p/w500/silent-voice-2016-poster.jpg",
  },
  {
    id: 16,
    title: "O Tempo com Você",
    genre: "Romance/Fantasia",
    year: 2019,
    image: "https://image.tmdb.org/t/p/w500/weathering-with-you-2019.jpg",
  },
  {
    id: 17,
    title: "Princesa Mononoke",
    genre: "Fantasia/Aventura",
    year: 1997,
    image: "https://image.tmdb.org/t/p/w500/princess-mononoke-1997.jpg",
  },
];

const ListaFilmes = () => {
  const [categoria, setCategoria] = useState<Movie[]>(destaque);

  return (
    <>
      <Header />
      <h1>Minha Lista de Filmes</h1>
      <nav>
        <button onClick={() => setCategoria(destaque)}>Destaque</button>
        <button onClick={() => setCategoria(favoritos)}>Favoritos</button>
        <button onClick={() => setCategoria(animesBons)}>Animes Bons</button>
      </nav>

      <div>
        <ul>
          {categoria.map((movie) => (
            <li key={movie.id}>
              <img src={movie.image} alt={movie.title} />
              <div>
                <strong>{movie.title}</strong> <br />
                <span>
                  {movie.genre} - {movie.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListaFilmes;
