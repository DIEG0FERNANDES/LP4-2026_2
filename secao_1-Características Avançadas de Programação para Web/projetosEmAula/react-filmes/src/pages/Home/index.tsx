import { Header } from "../../components";

const featuredMovies = [
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

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <h1>Filmes em Destaque</h1>
        <ul>
          {featuredMovies.map((movie) => (
            <li key={movie.id}>
              {movie.title} ({movie.year})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
