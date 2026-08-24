import { Header } from "../../components";

const featuredMovies = [
  { id: 1, title: "O Poderoso Chefão", year: 1972 },
  { id: 2, title: "Interestelar", year: 2014 },
  { id: 3, title: "Cidade de Deus", year: 2002 },
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
