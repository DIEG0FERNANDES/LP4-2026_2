import type { Anime } from "../types/anime";

interface Props {
  anime: Anime;
}

const AnimeCard = ({ anime }: Props) => {
  return (
    <div className="card">
      <img
        src={anime.attributes.posterImage.large}
        alt={anime.attributes.canonicalTitle}
      />

      <div className="card-content">
        <h2>{anime.attributes.canonicalTitle}</h2>

        <span className="rating">
          {anime.attributes.averageRating || "N/A"}
        </span>

        <p className="synopsis">{anime.attributes.synopsis}</p>
      </div>
    </div>
  );
};
export default AnimeCard;
