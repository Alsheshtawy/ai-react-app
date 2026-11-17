import { useState } from "react";

export default function SearchBar({ onSearch, disabled }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value);
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <label htmlFor="movie-title">Movie title</label>
      <input
        id="movie-title"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="e.g. Batman"
      />
      <button type="submit" disabled={disabled}>
        Search
      </button>
    </form>
  );
}
