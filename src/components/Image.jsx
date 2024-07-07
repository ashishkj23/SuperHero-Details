import React from 'react';
import './Image.css';

const Image = ({ src }) => {
  return (
    <div className="image-container">
      <img src={src} alt="Superhero" />
    </div>
  );
};

export default Image;
