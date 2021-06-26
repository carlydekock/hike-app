import React from 'react';
import image from '../img/Baker2.JPG';

const Image = () => {
  return (
    <div className="text-center">
      <img className="rounded" src={image} alt="Mount Baker" style={{maxWidth: "70%"}} />
    </div>
  )
}

export default Image;