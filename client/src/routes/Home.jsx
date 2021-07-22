import React from 'react';
import Header from '../components/Header';
import AddHike from '../components/AddHike';
import HikesList from '../components/HikesList';
import NavBar from '../components/NavBar';
import Image from '../components/Image';
// import { useAuth0 } from '@auth0/auth0-react';
// const serverUrl = 'http://localhost:3000'

const Home = () => {
  // const { getAccessTokenSilently } = useAuth0();
  // const { user } = useAuth0();
  // console.log(user);

  
  // const callSecure = async () => {
  //   try {
  //     const token = await getAccessTokenSilently();

  //     const response = await fetch(
  //       `${serverUrl}/api/v1/hikes/`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     const responseData = await response.json();
  //     // console.log(user);
  //     // console.log(responseData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div>
      <NavBar />
      <Header />
      <Image />
        {/* <button type="button" className="btn btn-primary" onClick={callSecure}>Call Secure</button> */}
      <AddHike />
      <HikesList />
    </div>
  )
};

export default Home;