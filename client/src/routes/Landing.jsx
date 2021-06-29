import React from 'react';
import Header from '../components/Header';
// import AddHike from '../components/AddHike';
// import HikesList from '../components/HikesList';
import NavBar from '../components/NavBar';
import Image from '../components/Image';
// import { useAuth0 } from '@auth0/auth0-react';

const Landing = () => {

  // const { getAccessTokenSilently } = useAuth0();
  // const token = getAccessTokenSilently();
  // console.log(token);

  return (
    <div>
      <NavBar />
      <Header />
      <Image />
      <p>Thanks for visiting the page! Looks like you aren't logged in yet, please login and view your hikes.</p>
    </div>
  )
};

export default Landing;