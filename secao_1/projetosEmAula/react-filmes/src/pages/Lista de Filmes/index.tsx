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
    image: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_SY679_.jpg",
  },
  {
    id: 2,
    title: "Quarteto Fantástico",
    genre: "Ação/Ficção Científica",
    year: 2026,
    image: "https://m.media-amazon.com/images/I/71quartetoPoster.jpg",
  },
  {
    id: 3,
    title: "Rango",
    genre: "Animação/Comédia",
    year: 2011,
    image: "https://m.media-amazon.com/images/I/51rangoPoster.jpg",
  },
  {
    id: 4,
    title: "O Hobbit: A Jornada Perdida",
    genre: "Fantasia/Aventura",
    year: 2026,
    image: "https://m.media-amazon.com/images/I/71hobbitPoster.jpg",
  },
  {
    id: 5,
    title: "Demon Slayer: Infinity Castle",
    genre: "Anime/Ação",
    year: 2026,
    image: "https://m.media-amazon.com/images/I/71demonslayerPoster.jpg",
  },
  {
    id: 6,
    title: "Bionicle – O Retorno das Lendas",
    genre: "Animação/Aventura",
    year: 2026,
    image: "https://m.media-amazon.com/images/I/71bioniclePoster.jpg",
  },
  {
    id: 7,
    title: "Supergirl",
    genre: "Ação/Fantasia",
    year: 2026,
    image: "https://m.media-amazon.com/images/I/71supergirlPoster.jpg",
  },
  {
    id: 8,
    title: "Superman",
    genre: "Ação/Fantasia",
    year: 2026,
    image: "https://m.media-amazon.com/images/I/71supermanPoster.jpg",
  },
];

const favoritos: Movie[] = [
  {
    id: 9,
    title: "O Hobbit",
    genre: "Fantasia/Aventura",
    year: 2012,
    image: "https://m.media-amazon.com/images/I/51hobbitPoster.jpg",
  },
  {
    id: 10,
    title: "Avengers: Ultimato",
    genre: "Ação/Ficção Científica",
    year: 2019,
    image: "https://m.media-amazon.com/images/I/51avengersPoster.jpg",
  },
  {
    id: 11,
    title: "Homem-Aranha: Novo Dia",
    genre: "Ação/Fantasia",
    year: 2021,
    image: "https://m.media-amazon.com/images/I/51spidermanPoster.jpg",
  },
  {
    id: 12,
    title: "Demon Slayer",
    genre: "Anime/Ação",
    year: 2019,
    image: "https://m.media-amazon.com/images/I/51demonslayerPoster.jpg",
  },
  {
    id: 13,
    title: "Bionicles",
    genre: "Animação/Aventura",
    year: 2003,
    image: "https://m.media-amazon.com/images/I/51bioniclePoster.jpg",
  },
];

const animesBons: Movie[] = [
  {
    id: 14,
    title: "Your Name",
    genre: "Romance/Fantasia",
    year: 2016,
    image: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_SY679_.jpg",
  },
  {
    id: 15,
    title: "A Voz do Silêncio",
    genre: "Drama",
    year: 2016,
    image: "https://m.media-amazon.com/images/I/71z0VZpXo-L._AC_SY679_.jpg",
  },
  {
    id: 16,
    title: "O Tempo com Você",
    genre: "Romance/Fantasia",
    year: 2019,
    image: "https://m.media-amazon.com/images/I/81ZpLhP1ZCL._AC_SY679_.jpg",
  },
  {
    id: 17,
    title: "Princesa Mononoke",
    genre: "Fantasia/Aventura",
    year: 1997,
    image: "https://m.media-amazon.com/images/I/91z0VZpXo-L._AC_SY679_.jpg",
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
