import React, { useEffect, useContext } from 'react';
import HikeFinder from '../apis/HikeFinder';
import { HikesContext } from '../context/HikesContext';
import { useHistory } from 'react-router-dom';

const HikesList = (props) => {
  const { hikes, setHikes } = useContext(HikesContext);
  //history represents history of the browser
  let history = useHistory();

  //this will run the hook only when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HikeFinder.get("/");
        setHikes(response.data.data.hikes);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData(); // eslint-disable-next-line
  }, []);

  const handleDelete = async (e, id) => {
    //this stops from going up to the table row, where it will interfere with the onClick for details
    e.stopPropagation();
    try {
      const response = await HikeFinder.delete(`/${id}`);
      setHikes(hikes.filter(hike => {
        return hike.id !== id;
      }));
    } catch(err){
      console.log(err);
    }
  };

  const handleUpdate = async (e, id) => {
    e.stopPropagation();
    try {
      history.push(`/hikes/${id}/update`);
    } catch(err){
      console.log(err);
    }
  };

  const handleHikeSelect = async (id) => {
    try {
      history.push(`/hikes/${id}`);
    } catch(err){
      console.log(err);
    }
  };

  return (
    <div className="list-group">
      <table className="table table-bordered table-hover table-light">
        <thead>
          <tr className="table-primary">
            <th scope="col">Hike</th>
            <th scope="col">Description</th>
            <th scope="col">Length</th>
            <th scope="col">Elevation Gain</th>
            {/* <th scope="col">Time</th>
            <th scope="col">Keywords</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th> */}
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {hikes && hikes.map(hike => {
            return (
              <tr onClick={() => handleHikeSelect(hike.id)} key={hike.id}>
                <td>{hike.name}</td>
                <td>{hike.description}</td>
                <td>{hike.length}</td>
                <td>{hike.elevation_gain}</td>
                <td><button onClick={(e) => handleUpdate(e, hike.id)} className="btn btn-warning">Update</button></td>
                <td><button onClick={(e) => handleDelete(e, hike.id)} className="btn btn-danger">Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default HikesList;