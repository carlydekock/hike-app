import React from 'react';
import UpdateHike from '../components/UpdateHike';
import NavBar from '../components/NavBar';


const Update = () => {
  return (
    <div>
      <NavBar />
      <h1 className="text-center">Update Hike</h1>
      <UpdateHike />
    </div>
  )
};

export default Update;