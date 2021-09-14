import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HikesContext } from '../context/HikesContext';
import HikeFinder from '../apis/HikeFinder';
import TripReports from '../components/TripReports';
import AddReport from '../components/AddReport';
import NavBar from '../components/NavBar';
import { useAuth0 } from "@auth0/auth0-react";

const Detail = () => {
  const { getAccessTokenSilently} = useAuth0();
  const { id } = useParams();
  const { selectedHike, setSelectedHike } = useContext(HikesContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await HikeFinder.get(`/${id}`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        });
        setSelectedHike(response.data.data);
      } catch(err) {
          console.log(err);
      }
    };
    fetchData(); // eslint-disable-next-line
  }, []);
  
  return (
    <div>
      <NavBar />
      {selectedHike && (
        <>
        <h1 className="text-center display-1">{selectedHike.hike.name}</h1>
          <div className="mt-3 align-item-center">
            <TripReports reports={selectedHike.reports}/>
          </div>
          <AddReport />
        </>
      )}
    </div>
  )
};

export default Detail;