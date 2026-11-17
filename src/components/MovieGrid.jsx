import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  return (
    <ul className="movie-grid">
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </ul>
  );
}
