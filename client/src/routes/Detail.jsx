import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HikesContext } from '../context/HikesContext';

const Detail = () => {
  const { id } = useParams();
  const { selectedHike, setSelectedHike } = useContext(HikesContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await HikesContext.get(`/${id}`);
        setSelectedHike(response.data.data.hike);
      } catch(err) {
          console.log(err);
      }
    };
    fetchData(); // eslint-disable-next-line
  }, []);
  
  return (
    <div>
      {selectedHike && selectedHike.name}
    </div>
  )
};

export default Detail;