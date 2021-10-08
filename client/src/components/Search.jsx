import React, {useState, useContext} from 'react';
import HikeFinder from '../apis/HikeFinder';
import { HikesContext } from '../context/HikesContext';

const Search = () => {

  const [searchTerms, setSearchTerms] = useState("");
  const [searchType, setSearchType] = useState("");
  const { setHikes } = useContext(HikesContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(searchTerms, searchType);
      //need to have this be a get to /search
      const response = await HikeFinder.post('/search', {
        searchTerms,
        searchType,
      })
      console.log('back from server', response.data.data.hikes);
      setHikes(response.data.data.hikes);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="input-group container d-flex justify-content-center my-3">
      <div className="form-outline" style={{ "width": "30%" }}>
        <input type="text" className="form-control" placeholder="Search for a hike" onChange={(e) => setSearchTerms(e.target.value)}/>
      </div>
      <div>
        {/* This is the dropdown to select how to search */}
        {/* <label>Search By:</label> */}
        <select className="form-select" aria-label="Default select option" onChange={(e) => setSearchType(e.target.value)}>
          <option value="">Search By:</option>
          <option value="name">Name</option>
          <option value="description">Description</option>
          <option value="keywords">Keywords</option>
          <option value="length">Length</option>
        </select>
      </div>
      <button type="button" className="btn btn-dark" style={{"width": "5%"}} onClick={handleSubmit}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  )
}

export default Search;