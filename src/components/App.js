import React, { Component } from 'react';
import Gallery from './components/Gallery';
import './App.css';

import featureImage from './assets/feature/image-7.webp';
import image2 from './assets/images/image-11.jpeg';
import image3 from './assets/images/image-3.webp';

const images = [
  {
    src: image2,
    title: 'Image 2',
  },
  {
    src: image3,
    title: 'Image 3',
  },
  {
    src: image3,
    title: 'Image 3',
  },
  {
    src: image3,
    title: 'Image 3',
  },
  {
    src: image3,
    title: 'Image 3',
  },

  {
    src: image3,
    title: 'Image 3',
  },
  {
    src: image3,
    title: 'Image 3',
  },
  {
    src: featureImage,
    title: 'Feature image',
  },
  // add more images as needed
];

const App =()=> {
    return (
      <div>
        <Gallery images={images} />


      </div>
    )
}

export default App;