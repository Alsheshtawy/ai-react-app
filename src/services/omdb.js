const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(title) {
  const query = title.trim();
  if (!query) throw new Error("Please enter a movie title.");

  const url = `${BASE_URL}?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${encodeURIComponent(query)}&type=movie`;

  let res;
  try {
    res = await fetch(url);
  } catch {
    throw new Error("Network error. Check your connection and try again.");
  }
  if (!res.ok) throw new Error("The movie service is unavailable right now.");

  const data = await res.json();
  if (data.Response === "False") {
    if (data.Error === "Movie not found!") return [];
    throw new Error(data.Error || "Something went wrong.");
  }
  return data.Search;
}
