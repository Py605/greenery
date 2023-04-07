import React from 'react';

function SearchComponent() {
  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
}

export default SearchComponent;
