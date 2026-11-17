export default function MovieCard({ movie }) {
  const hasPoster = movie.Poster && movie.Poster !== "N/A";

  return (
    <li className="movie-card">
      {hasPoster ? (
        <img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
      ) : (
        <div className="no-poster">No poster</div>
      )}
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </li>
  );
}
