import  { useState } from "react";
const search = require("./search-outline.svg");
import "./SCSS/search.scss";

const Search= () => {
  const [textToSearch, settextToSearch] = useState<string>("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    settextToSearch(e.target.value);
  }
  return (
    <div className="header-item search">
      <input
        className="search-input"
        type="search"
        onChange={handleChange}
        placeholder="Search for articles"
      />
      <img className="search-image" src={search} />
    </div>
  );
};

export default Search;
