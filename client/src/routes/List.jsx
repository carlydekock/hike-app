import React from 'react';
import Header from '../components/Header';
import AddHike from '../components/AddHike';
import MyHikesList from '../components/MyHikesList';
import NavBar from '../components/NavBar';

const List = () => {
  
  return (
    <div>
      <NavBar />
      <Header />
      {/* <AddHike /> */}
      <MyHikesList />
    </div>
  )
};

export default List;