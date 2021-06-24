import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HikesContext } from '../context/HikesContext';
import HikeFinder from '../apis/HikeFinder';
import TripReports from '../components/TripReports';
import AddReport from '../components/AddReport';

const Detail = () => {
  const { id } = useParams();
  const { selectedHike, setSelectedHike } = useContext(HikesContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HikeFinder.get(`/${id}`);
        setSelectedHike(response.data.data.hike);
      } catch(err) {
          console.log(err);
      }
    };
    fetchData(); // eslint-disable-next-line
  }, []);
  
  return (
    <div>
      {selectedHike && (
        <>
          <div className="mt-3">
            <TripReports />
          </div>
          <AddReport />
        </>
      )}
    </div>
  )
};

export default Detail;