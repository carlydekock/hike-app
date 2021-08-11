import React from 'react';
import Header from '../components/Header';
import AddHike from '../components/AddHike';
import HikesList from '../components/HikesList';
import NavBar from '../components/NavBar';
import Image from '../components/Image';

const Home = () => {

  // //Troubleshooting authentication
  // async function callProtectedApi(){
  //   try {
  //     const token = await getAccessTokenSilently();
  //     const response = await axios.get('http://localhost:3000/protected', {
  //       headers: {
  //         authorization: `Bearer ${token}`
  //       }
  //     })
  //     console.log(response.data);
  //   } catch (err){
  //     console.log(err.message);
  //   }
  // }

  return (
    <div>
      <NavBar />
      <Header />
      <Image />
        {/* <button type="button" className="btn btn-primary" onClick={callProtectedApi}>Call Protected API</button> */}
      <AddHike />
      <HikesList />
    </div>
  )
};

export default Home;