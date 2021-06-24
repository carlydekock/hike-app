import React from 'react';

const TripReports = () => {
  return (
    <div className="row mb-2">
      <div className="card border-dark mb-3" style={{maxWidth: "70%"}}>
      {/* <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "80%"}}> */}
        <div className="card-header d-flex justify-content-between">
          <span>Name of Reviewer</span>
          <span>Date Hiked</span>
        </div>
        <div className="card-body text-dark">
          <h5 className="card-title">Title of review</h5>
          <p className="card-text">This was great!</p>
        </div>
      </div>
      <div className="card border-dark mb-3" style={{maxWidth: "70%"}}>
      {/* <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "80%"}}> */}
        <div className="card-header d-flex justify-content-between">
          <span>Name of Reviewer</span>
          <span>Date Hiked</span>
        </div>
        <div className="card-body text-dark">
          <h5 className="card-title">Title of review</h5>
          <p className="card-text">This was great!</p>
        </div>
      </div>
      <div className="card border-dark mb-3" style={{maxWidth: "70%"}}>
      {/* <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "80%"}}> */}
        <div className="card-header d-flex justify-content-between">
          <span>Name of Reviewer</span>
          <span>Date Hiked</span>
        </div>
        <div className="card-body text-dark">
          <h5 className="card-title">Title of review</h5>
          <p className="card-text">This was great!</p>
        </div>
      </div>
    </div>
  )
}

export default TripReports;