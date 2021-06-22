import React from 'react'

const AddHike = () => {
  return (
    <div className="mb-4 p-2">
      <form action="">
        <div className="row mb-2">
          <div className="col">
            <input type="text" className="form-control" placeholder="Name of Hike" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Description of Hike" />
          </div>
        </div>
        <div className="row mb-2">
          <div className="form-group col-md-4">
            <input type="text" className="form-control" id="inputLength" placeholder="Length (in miles)" />
          </div>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" id="inputElevation" placeholder="Elevation (in feet)" />
          </div>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" id="inputTime" placeholder="Time to Complete" />
          </div>
        </div>
        <div className="row mb-2">
          <div className="form-group col-md-4">
            <input type="text" className="form-control" id="inputKeywords" placeholder="Keywords" />
          </div>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" id="inputLatitude" placeholder="Latitude" />
          </div>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" id="inputLongitude" placeholder="Longitude" />
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
          <button className="btn btn-primary btn-sm">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddHike;