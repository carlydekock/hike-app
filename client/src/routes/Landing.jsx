import React from 'react';
import Header from '../components/Header';
// import AddHike from '../components/AddHike';
// import HikesList from '../components/HikesList';
import NavBar from '../components/NavBar';
import Image from '../components/Image';
import LoginButton from '../components/LoginButton';

const Landing = () => {

  // const { getAccessTokenSilently } = useAuth0();
  // const token = getAccessTokenSilently();
  // console.log(token);

  return (
    <div>
      <NavBar />
      <Header />
      <Image />
      <div className="text-center pt-5">
        <p className="mx-auto" style={{maxWidth: "60%", fontSize: "1.75em"}}>Thanks for visiting the page! Looks like you aren't logged in yet, please login to view your hikes.</p>
        <LoginButton />
      </div>
    </div>
  )
};

export default Landing;