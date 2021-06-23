import React, {useState, createContext} from 'react';

export const HikesContext = createContext();

export const HikesContextProvider = props => {
  const [hikes, setHikes] = useState([]); 

  const addHike = (hike) => {
    setHikes([...hikes, hike]);
  }
  return (
    <HikesContext.Provider value={{hikes, setHikes, addHike}}>
      {props.children}
    </HikesContext.Provider>
  );
}