import React from 'react';
import Header from '../components/Header';
import AddHike from '../components/AddHike';
import HikesList from '../components/HikesList';

const Home = () => {
  return (
    <div>
      <Header />
      <AddHike />
      <HikesList />
    </div>
  )
};

export default Home;