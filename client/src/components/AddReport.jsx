import React, { useState } from 'react';

const AddReport = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="mb-2 pb-2">
      <form action="">
        <div className="row pb-2">
          <div className="form-group col-4">
            <label htmlFor="name">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="name of reviewer" type="text" className="form-control" />
          </div>
          <div className="form-group col-4">
            <label htmlFor="date">Date Hiked</label>
            <input value={date} onChange={(e) => setDate(e.target.value)} id="date" placeholder="date hiked" type="text" className="form-control" />
          </div>
        </div>
        <div className="row pb-3">
          <div className="form-group col-4">
            <label htmlFor="title">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} id="title" placeholder="review title" type="text" className="form-control" />
          </div>
          <div className="form-group col-4">
            <label htmlFor="description">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" placeholder="description of your trip - what do you want to share?" className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary pt-2">Submit</button>
      </form>
      
    </div>
  )
}

export default AddReport;