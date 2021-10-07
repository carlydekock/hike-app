import React from 'react';
import HikeFinder from '../apis/HikeFinder';

const Search = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //need to have this be a get to /search
      const response = await HikeFinder.get
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="input-group container d-flex justify-content-center my-3">
      <div className="form-outline" style={{ "width": "30%" }}>
        <input type="search" className="form-control" placeholder="Search for a hike" />
      </div>
      <div>
        {/* This is the dropdown to select how to search */}
        <select className="form-select" aria-label="Default select option">
          <option defaultValue>How to Search</option>
          <option value="1">Name</option>
          <option value="2">Description</option>
          <option value="3">Keywords</option>
          <option value="4">Length</option>
        </select>
      </div>
      <button type="button" className="btn btn-dark" style={{"width": "5%"}}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  )
}

export default Search;