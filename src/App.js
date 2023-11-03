import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import Image from "./components/Image.jsx";

import "./App.css";

import featureImage from "./assets/feature/image-7.webp";

import image1 from "./assets/images/image-1.webp";
import image2 from "./assets/images/image-2.webp";
import image3 from "./assets/images/image-3.webp";
import image4 from "./assets/images/image-4.webp";
import image5 from "./assets/images/image-5.webp";
import image6 from "./assets/images/image-6.webp";
// import image7 from './assets/images/image-7.webp';
import image8 from "./assets/images/image-8.webp";
import image9 from "./assets/images/image-9.webp";
import image10 from "./assets/images/image-10.jpeg";
import image11 from "./assets/images/image-11.jpeg";

const App = () => {
  const [images, setImages] = useState([
    {
      id: 12,
      src: "image8",
      alt: "Image 12",
    },
    {
      id: 13,
      src: "image9",
      alt: "Image 13",
    },
    {
      id: 14,
      src: "image10",
      alt: "Image 14",
    },
    {
      id: 15,
      src: "",
      alt: "Image 15",
    },
    {
      id: 1,
      src: image1,
      alt: "Image 1",
      selected: false,
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
      selected: false,
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
      selected: false,
    },
    {
      id: 4,
      src: image4,
      alt: "Image 4",
      selected: false,
    },
    {
      id: 5,
      src: image5,
      alt: "Image 5",
      selected: false,
    },
    {
      id: 6,
      src: image6,
      alt: "Image 6",
      selected: false,
    },
    {
      id: 7,
      src: featureImage,
      alt: "Image 7",
      selected: false,
    },
    {
      id: 8,
      src: image8,
      alt: "Image 8",
      selected: false,
    },
    {
      id: 9,
      src: image9,
      alt: "Image 9",
      selected: false,
    },
    {
      id: 10,
      src: image10,
      alt: "Image 10",
      selected: false,
    },
    {
      id: 11,
      src: image11,
      alt: "Image 11",
      selected: false,
    },
  ]);

  // Store the ID of the feature image
  const [featureImageID, setFeatureImageID] = useState(images[7].id);

  // Store the IDs of the selected images
  const [selectedImages, setSelectedImages] = useState([]);

  // Handle reordering of images
  const handleReorder = (newOrder) => {
    setImages(newOrder);
  };

  // Handle selecting an image
  const handleSelectImage = (imageID) => {
    const newImages = images.map((image) =>
      image.id === imageID ? { ...image, selected: !image.selected } : image
    );
    setImages(newImages);
    if (selectedImages.includes(imageID)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageID));
    } else {
      setSelectedImages([...selectedImages, imageID]);
    }
  };

  // Handle deleting selected images
  const handleDeleteSelected = () => {
    const newImages = images.filter((image) => !selectedImages.includes(image.id));
    setImages(newImages);
    setSelectedImages([]);
  };

  // Set the feature image to the first image
  const handleSetFeatureImage = (index) => {
    const newImages = [...images];
    const firstImage = newImages[0];
    newImages[0] = newImages[index];
    newImages[index] = firstImage;
    setImages(newImages);
    setFeatureImageID(newImages[0].id);
  };

  // Handle reordering images when selectedImages state changes
  useEffect(() => {
    handleReorder([...images].sort((a, b) => a.selected - b.selected));
  }, [selectedImages, images]);

  return (
    <div className="App">
      <Gallery
        images={images}
        onReorder={handleReorder}
        onSelectImage={handleSelectImage}
        onDeleteSelected={handleDeleteSelected}
        onSetFeatureImage={handleSetFeatureImage}
        featureImageID={featureImageID}
      />
    </div>
  );
};

export default App;
