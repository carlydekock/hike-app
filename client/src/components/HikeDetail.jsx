import React from 'react';


const HikeDetail = ({hike}) => {
  return(
    <div className="container" style={{"width":"85%"}}>
      <table className="table table-bordered table-hover table-light ">
        <tbody>
          <tr className="table-info">
            <td><b>Hike Details and Info</b></td>
          </tr>
          <tr>
            <td><b>Description:</b> {hike.hike.description}</td>
          </tr>
          <tr>
            <td><b>Length:</b> {hike.hike.length}</td>
          </tr>
          <tr>
            <td><b>Elevation Gain:</b> {hike.hike.elevation_gain}</td>
          </tr>
          <tr>
            <td><b>Est. Time to Complete:</b> {hike.hike.time}</td>
          </tr>
          <tr>
            <td><b>Keywords:</b> {hike.hike.keywords}</td>
          </tr>
          <tr>
            <td><b>Latitude:</b> {hike.hike.latitude}</td>
          </tr>
          <tr>
            <td><b>Longitude:</b> {hike.hike.longitude}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HikeDetail;