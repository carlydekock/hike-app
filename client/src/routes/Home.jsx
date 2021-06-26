import React from 'react';
import Header from '../components/Header';
import AddHike from '../components/AddHike';
import HikesList from '../components/HikesList';
import NavBar from '../components/NavBar';

const Home = () => {
  console.log(window.location);
  return (
    <div>
      <NavBar />
      <Header />
      <AddHike />
      <HikesList />
    </div>
  )
};

export default Home;