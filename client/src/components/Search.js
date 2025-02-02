import React from "react";

const Search = ({ searchValue, setSearchValue }) => {
  const handleNameSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleNameSearch}
      ></input>
    </div>
  );
};

export default Search;
