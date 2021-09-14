import React, {useState, useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import HikeFinder from '../apis/HikeFinder';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';

const UpdateHike = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [elevation, setElevation] = useState("");
  const [time, setTime] = useState("");
  const [keywords, setKeywords] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const user = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await HikeFinder.get(`/${id}`);
      setName(response.data.data.hike.name);
      setDescription(response.data.data.hike.description);
      setLength(response.data.data.hike.length);
      setElevation(response.data.data.hike.elevation_gain);
      setTime(response.data.data.hike.time);
      setKeywords(response.data.data.hike.keywords);
      setLatitude(response.data.data.hike.latitude);
      setLongitude(response.data.data.hike.longitude);
    };

    fetchData(); // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await HikeFinder.put(`/${id}`, {
      user,
      name,
      description,
      length,
      elevation_gain: elevation,
      time,
      keywords,
      latitude,
      longitude,
    });
    history.push('/');
  }

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Hike Name</label>
          <input value={name} onChange={e => setName(e.target.value)} id="name" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input value={description} onChange={e => setDescription(e.target.value)} id="description" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="length">Length</label>
          <input value={length} onChange={e => setLength(e.target.value)} id="length" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="elevation">Elevation Gain</label>
          <input value={elevation} onChange={e => setElevation(e.target.value)} id="elevation" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input value={time} onChange={e => setTime(e.target.value)} id="time" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="keywords">Keywords</label>
          <input value={keywords} onChange={e => setKeywords(e.target.value)} id="keywords" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="latitude">Latitude</label>
          <input value={latitude} onChange={e => setLatitude(e.target.value)} id="latitude" className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="longitude">Longitude</label>
          <input value={longitude} onChange={e => setLongitude(e.target.value)} id="longitude" className="form-control" type="text" />
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default UpdateHike;