import React from 'react';
import './DogsGallery.css';

// Import your images (adjust paths as needed)
import image01 from './images/image-01.jpg';
import image02 from './images/image-02.jpg';
import image03 from './images/image-03.jpg';
import image04 from './images/image-04.jpg';
import image05 from './images/image-05.jpg';
import image06 from './images/image-06.jpg';
import image07 from './images/image-07.jpg';
import image08 from './images/image-08.jpg';

const DogsGallery = () => {
  const images = [
    { src: image01, alt: "Julie's Rabbit Ears", caption: "Julie's Rabbit Ears" },
    { src: image02, alt: "The Innocent Look", caption: "The Innocent Look" },
    { src: image03, alt: "Big Eyed Buggy", caption: "Big Eyed Buggy" },
    { src: image04, alt: "The Saint Doggo", caption: "The Saint Doggo" },
    { src: image05, alt: "Big Eyed Buggy", caption: "Big Eyed Buggy" },
    { src: image06, alt: "The Innocent Look", caption: "The Innocent Look" },
    { src: image07, alt: "The Saint Doggo", caption: "The Saint Doggo" },
    { src: image08, alt: "Julie's Rabbit Ears", caption: "Julie's Rabbit Ears" },
  ];

  return (
    <div className="dogs-gallery-container">
      <h1 className="gallery-heading">Dogs Image Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <figure key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default DogsGallery;