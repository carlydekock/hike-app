import React, {useState, createContext} from 'react';

export const HikesContext = createContext();

export const HikesContextProvider = props => {
  const [hikes, setHikes] = useState([]); 
  const [selectedHike, setSelectedHike] = useState(null);

  const addHike = (hike) => {
    setHikes([...hikes, hike]);
  }
  return (
    <HikesContext.Provider value={{hikes, setHikes, addHike, selectedHike, setSelectedHike}}>
      {props.children}
    </HikesContext.Provider>
  );
}