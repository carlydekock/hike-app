import React from 'react';

const Search = () => {

  return (
    <div className="input-group container d-flex justify-content-center my-3">
      <div className="form-outline">
        <input type="search" className="form-control" placeholder="Search for a hike"/>
      </div>
      <button type="button" className="btn btn-dark">
        <i className="fas fa-search"></i>
      </button>
    </div>
  )
}

export default Search;