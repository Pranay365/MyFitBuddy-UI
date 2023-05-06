import React, { useState } from "react";
const search = require("./search-outline.svg");
import "./search.scss";
type ChildProps = {
  className: string;
};
const Search: React.FC<ChildProps> = ({ className }) => {
  const [textToSearch, settextToSearch] = useState<string>("");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    settextToSearch(e.target.value);
  }
  return (
    <div className={`${className} search`}>
      <input
        className="search-input"
        type="search"
        onChange={handleChange}
        placeholder="Search for articles on workouts and nutrition"
      />
      <img className="search-image" src={search} />
    </div>
  );
};

export default Search;
