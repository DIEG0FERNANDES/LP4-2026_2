export interface Anime {
  id: string;
  type: string;
  attributes: {
    canonicalTitle: string;
    synopsis: string;
    averageRating: string;
    status: string;
    posterImage: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };
  };
}

export interface AnimeResponse {
  data: Anime[];
}
