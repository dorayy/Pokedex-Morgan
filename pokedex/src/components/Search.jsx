import React, { useState } from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <span>Search :</span>
      <input
        className="p-2 w-60 border-none bg-state-400"
        key="random1"
        value={keyword}
        placeholder={"Chercher votre pokemon"}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
