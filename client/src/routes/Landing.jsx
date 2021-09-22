import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Image from '../components/Image';
import LoginButton from '../components/LoginButton';

const Landing = () => {

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