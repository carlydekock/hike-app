import React from 'react';
import Header from '../components/Header';
import AddHike from '../components/AddHike';
import HikesList from '../components/HikesList';
import NavBar from '../components/NavBar';
import Image from '../components/Image';
// import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {

  // const { getAccessTokenSilently } = useAuth0();
  // const token = getAccessTokenSilently();
  // console.log(token);

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