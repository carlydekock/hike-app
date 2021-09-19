import React, { useContext, useState } from 'react';
import HikeFinder from '../apis/HikeFinder';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';

const AddReport = () => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const user = useContext(UserContext);

  const handleSubmitReport = async (e) => {
    e.preventDefault();
    try{
      await HikeFinder.post(`/${id}/addreport`, {
        user,
        name,
        title,
        description,
        date,
      });
      history.push('/');
      history.push(location.pathname);
    } catch(err){
      console.log(err);
    }
  }

  return (
    <div className="container" style={{"width":"80%"}}>
    <form action="">
      <div className="row">
        <div className="form-group col">
          <label htmlFor="name">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Name of reviewer" type="text" className="form-control" />
        </div>
        <div className="form-group col">
          <label htmlFor="date">Date Hiked</label>
          <input value={date} onChange={(e) => setDate(e.target.value)} id="date" placeholder="Date hiked" type="text" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="form-group col">
          <label htmlFor="title">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Review title" type="text" className="form-control" />
        </div>
        <div className="form-group col">
          <label htmlFor="description">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Description of your trip - what do you want to share?" className="form-control" />
        </div>
      </div>
      <div className="d-flex justify-content-center my-3 px-4">
        <button onClick={handleSubmitReport} type="submit" className="btn btn-secondary pt-2" style={{"width":"25%"}}>Submit</button>
      </div>
    </form>
  </div>
  )
}

export default AddReport;