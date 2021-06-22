import React from 'react';

const HikesList = () => {
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
          <tr>
            <td>Baker</td>
            <td>Baker</td>
            <td>Baker</td>
            <td>Baker</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
          <tr>
            <td>Baker</td>
            <td>Baker</td>
            <td>Baker</td>
            <td>Baker</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HikesList;