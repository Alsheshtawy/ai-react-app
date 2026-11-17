import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import { useMovieSearch } from "./hooks/useMovieSearch";
import "./App.css";

export default function App() {
  const { results, loading, error, searched, search } = useMovieSearch();

  return (
    <main>
      <h1>Movie Search</h1>
      <SearchBar onSearch={search} disabled={loading} />
      <div aria-live="polite">
        {loading && <p>Loading...</p>}
        {error && <p role="alert">{error}</p>}
        {searched && !loading && results.length === 0 && <p>No movies found.</p>}
      </div>
      <MovieGrid movies={results} />
    </main>
  );
}
