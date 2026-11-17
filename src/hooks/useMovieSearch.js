import { useState } from "react";
import { searchMovies } from "../services/omdb";

export function useMovieSearch() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  async function search(title) {
    setLoading(true);
    setError("");
    try {
      const movies = await searchMovies(title);
      setResults(movies);
      setSearched(true);
    } catch (err) {
      setResults([]);
      setSearched(false);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { results, loading, error, searched, search };
}
