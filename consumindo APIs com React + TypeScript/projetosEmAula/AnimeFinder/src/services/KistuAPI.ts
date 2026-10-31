import type { AnimeResponse } from "../types/anime";

const BASE_URL = "https://kitsu.io/api/edge";

export async function getAnimes(
  search?: string,
  category?: string,
): Promise<AnimeResponse> {
  let url = `${BASE_URL}/anime?page[limit]=12`;

  if (search) {
    url += `&filter[text]=${encodeURIComponent(search)}`;
  }

  if (category) {
    url += `&filter[categories]=${encodeURIComponent(category)}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar animes");
  }

  return response.json();
}
