import React from 'react';
import Header from '../components/Header';
import MyHikesList from '../components/MyHikesList';
import NavBar from '../components/NavBar';

const List = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <MyHikesList />
    </div>
  )
};

export default List;