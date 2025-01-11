import React from 'react';
import './Gallery.css';
import alexImage from '../content/alex.jpg'; // Adjust the file path as needed

const Gallery = () => {
  const photos = Array(10).fill(alexImage); // Create an array with 10 placeholder images

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo" key={index}>
            <img src={photo} alt={`Placeholder ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
