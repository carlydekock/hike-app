import React, {useState, useContext} from 'react';
import HikeFinder from '../apis/HikeFinder';
import { HikesContext } from '../context/HikesContext';

const AddHike = () => {
  const { addHike } = useContext(HikesContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [elevation, setElevation] = useState("");
  const [time, setTime] = useState("");
  const [keywords, setKeywords] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await HikeFinder.post('/', {
        name: name,
        description: description,
        length: length,
        elevation_gain: elevation,
        time: time,
        keywords: keywords,
        latitude: latitude,
        longitude: longitude,
      });
      addHike(response.data.data.hike);
      console.log(response);
    } catch(err){
        console.log(err);
    }
  }
  return (
    <div className="mb-4 p-2">
      <form action="">
        <div className="row mb-2">
          <div className="col">
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" className="form-control" placeholder="Name of Hike" />
          </div>
          <div className="col">
            <input value={description} onChange={(e) => setDescription(e.target.value)} name="description" type="text" className="form-control" placeholder="Description of Hike" />
          </div>
        </div>
        <div className="row mb-2">
          <div className="form-group col-md-4">
            <input value={length} onChange={(e) => setLength(e.target.value)} name="length" type="text" className="form-control" placeholder="Length (in miles)" />
          </div>
          <div className="form-group col-md-4">
            <input value={elevation} onChange={(e) => setElevation(e.target.value)}name="elevation" type="text" className="form-control" placeholder="Elevation (in feet)" />
          </div>
          <div className="form-group col-md-4">
            <input value={time} onChange={(e) => setTime(e.target.value)}name="time" type="text" className="form-control" placeholder="Time to Complete" />
          </div>
        </div>
        <div className="row mb-2">
          <div className="form-group col-md-4">
            <input value={keywords} onChange={(e) => setKeywords(e.target.value)} name="keywords" type="text" className="form-control" placeholder="Keywords" />
          </div>
          <div className="form-group col-md-4">
            <input value={latitude} onChange={(e) => setLatitude(e.target.value)} name="latitude" type="text" className="form-control" placeholder="Latitude" />
          </div>
          <div className="form-group col-md-4">
            <input value={longitude} onChange={(e) => setLongitude(e.target.value)} name="longitude" type="text" className="form-control" placeholder="Longitude" />
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2">
              <option defaultValue>Keywords</option>
              <option value="lake">Lake</option>
              <option value="vista">Vista</option>
              <option value="wildflowers">Wildflowers</option>
              <option value="wildlife">Wildlife</option>
            </select>
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-sm">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddHike;