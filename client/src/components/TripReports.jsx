import React from 'react';

const TripReports = ({reports}) => {
  return (
    <div className="row mb-2 d-flex justify-content-center">
      {reports.map((report) => {
        return(
          <div key={report.id} className="card border-dark mb-3" style={{"width": "80%"}}>
            <div className="card-header d-flex justify-content-between">
              <span>{report.name}</span>
              <span>{report.hiked_at}</span>
            </div>
            <div className="card-body text-dark">
              <h5 className="card-title">{report.title}</h5>
              <p className="card-text">{report.description}</p>
             </div>
          </div>
        )
      })}
      {/* <div className="card border-dark mb-3" style={{maxWidth: "70%"}}>
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
        <div className="card-header d-flex justify-content-between">
          <span>Name of Reviewer</span>
          <span>Date Hiked</span>
        </div>
        <div className="card-body text-dark">
          <h5 className="card-title">Title of review</h5>
          <p className="card-text">This was great!</p>
        </div>
      </div> */}
    </div>
  )
}

export default TripReports;