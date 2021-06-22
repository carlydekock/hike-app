import React, {useState, createContext} from 'react';

export const HikesContext = createContext();

export const HikesContextProvider = props => {
  const [hikes, setHikes] = useState([]); 

  return (
    <HikesContext.Provider value={{hikes, setHikes}}>
      {props.children}
    </HikesContext.Provider>
  );
}