  
import React from "react";


const SearchName = () => {
  

  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              
            </span>
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          aria-label="Search"
          />
        </div>
        <button>Search</button>
    </div>
  );
}
export default SearchName;