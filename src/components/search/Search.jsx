import React from "react";
import { useGlobalContext } from "../../context.js";
import "./search.scss";
function Search() {
  const { query, setQuery } = useGlobalContext();
  console.log(query);
  return (
    <section className="search">
      <h2>Search for News</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </section>
  );
}

export default Search;
