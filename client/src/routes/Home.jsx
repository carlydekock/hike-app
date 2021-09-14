import React from 'react';
import Header from '../components/Header';
import AddHike from '../components/AddHike';
import HikesList from '../components/HikesList';
import NavBar from '../components/NavBar';
import Image from '../components/Image';

const Home = () => {

  return (
    <div>
      <NavBar />
      <Header />
      <Image />
      <AddHike />
      <HikesList />
    </div>
  )
};

export default Home;