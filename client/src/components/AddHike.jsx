import React, {useState, useContext} from 'react';
import HikeFinder from '../apis/HikeFinder';
import { HikesContext } from '../context/HikesContext';
import UserContext from '../context/UserContext';

const AddHike = () => {
  const { addHike } = useContext(HikesContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [unit, setUnit] = useState("");
  const [unitElev, setUnitElev] = useState("");
  const [unitTime, setUnitTime] = useState("");
  const [elevation, setElevation] = useState("");
  const [time, setTime] = useState("");
  const [keywords, setKeywords] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const user = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const lengthToSubmit = `${length} ${unit}`;
      const elevToSubmit = `${elevation} ${unitElev}`;
      const timeToSubmit = `${time} ${unitTime}`;

      const response = await HikeFinder.post('/', {
        user,
        name,
        description,
        length: lengthToSubmit,
        elevation_gain: elevToSubmit, 
        time: timeToSubmit,
        keywords,
        latitude,
        longitude,
      });
      addHike(response.data.data.hike);
    } catch(err){
        console.log(err);
    }
  }
  return (
    <div className="container d-flex justify-content-center my-3">
      <form action="">
        <div className="row">
          <div className="col">
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" className="form-control" placeholder="Name of Hike" />
          </div>
          <div className="col">
            <input value={description} onChange={(e) => setDescription(e.target.value)} name="description" type="text" className="form-control" placeholder="Description of Hike" />
          </div>
        </div>
        <div className="row my-2">
          <div className="form-group input-group col">
            <input value={length} onChange={(e) => setLength(e.target.value)} name="length" type="text" className="form-control" placeholder="Length" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" value="mi" onClick={(e) => setUnit(e.target.value)}>mi</button>
              <button className="btn btn-outline-secondary" type="button" value="km" onClick={(e) => setUnit(e.target.value)}>km</button>
            </div>
          </div>
          <div className="form-group input-group col">
            <input value={elevation} onChange={(e) => setElevation(e.target.value)}name="elevation" type="text" className="form-control" placeholder="Elevation" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" value="ft" onClick={(e) => setUnitElev(e.target.value)}>ft</button>
              <button className="btn btn-outline-secondary" type="button" value="m" onClick={(e) => setUnitElev(e.target.value)}>m</button>
            </div>
          </div>
          <div className="form-group input-group col">
            <input value={time} onChange={(e) => setTime(e.target.value)}name="time" type="text" className="form-control" placeholder="Time to Complete" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" value="min" onClick={(e) => setUnitTime(e.target.value)}>min</button>
              <button className="btn btn-outline-secondary" type="button" value="hrs" onClick={(e) => setUnitTime(e.target.value)}>hrs</button>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="form-group col">
            <input value={keywords} onChange={(e) => setKeywords(e.target.value)} name="keywords" type="text" className="form-control" placeholder="Keywords" />
          </div>
          <div className="form-group col">
            <input value={latitude} onChange={(e) => setLatitude(e.target.value)} name="latitude" type="text" className="form-control" placeholder="Latitude" />
          </div>
          <div className="form-group col">
            <input value={longitude} onChange={(e) => setLongitude(e.target.value)} name="longitude" type="text" className="form-control" placeholder="Longitude" />
          </div>
          <div className="d-flex justify-content-center my-3">
            <button type="submit" onClick={handleSubmit} className="btn btn-dark" style={{"width":"50%"}}>Add New Hike</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddHike;