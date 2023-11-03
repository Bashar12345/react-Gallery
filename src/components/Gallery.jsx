import { useState, useEffect } from "react";
import { Container } from "react-grid-system";
import Image from "./Image.jsx";

export default function Gallery({
  images,
  onReorder,
  onSelectImage,
  onDeleteSelected,
  onSetFeatureImage,
  featureImageID,
}) {
  const [selectedImages, setSelectedImages] = useState([]);


  const remainingImagesG = remainingImages.slice(
    featureSize.width * featureSize.height
  );
  const remainingImageCount = remainingImagesG.length;

  // calculate the number of columns and rows needed to display all remaining images
  // use ceil to ensure we have enough columns and rows to fit all images
  const colCount = Math.ceil(remainingImageCount / featureSize.height);
  const rowCount = Math.ceil(remainingImageCount / featureSize.width);

  // set the grid template to repeat rows and columns as needed
  const gridTemplateColumns = `repeat(${colCount}, 1fr)`;
  const gridTemplateRows = `repeat(${rowCount}, 1fr)`;

  // use media queries to adjust grid layout based on screen size
  const mq = window.matchMedia("(max-width: 480px)");
  const mobileLayout = mq.matches;

























  // Handle selecting an image
  const handleSelectImage = (e) => {
    const selectedID = parseInt(e.target.value);
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedImages([...selectedImages, selectedID]);
    } else {
      setSelectedImages(selectedImages.filter((id) => id !== selectedID));
    }

    onSelectImage(selectedID);
  };

  // Handle deleting selected images
  const handleDeleteSelected = () => {
    onDeleteSelected();
    setSelectedImages([]);
  };

  // Handle setting the feature image
  const handleSetFeatureImage = (index) => {
    onSetFeatureImage(index);
  };




  const featureImage = images.find((image) => image.id === featureImageID);
  const remainingImages = images.filter((image) => image.id !== featureImageID);




  // Handle reordering images when selectedImages state changes
  useEffect(() => {
    onReorder(selectedImages);
  }, [selectedImages, onReorder]);





  const featureSize = { width: 2, height: 2 };
  const featureStyles = {
    gridColumn: "span 2",
    gridRow: "span 2",
  };

  return (
    <>
      <Container
        style={{
          margin: "10px",
          display: "grid",
          gap: "10px",
          gridTemplateColumns: mobileLayout
            ? "1fr"
            : `${gridTemplateColumns} [end]`,
          gridTemplateRows: mobileLayout
            ? "auto auto"
            : `${gridTemplateRows} [end]`,
        }}
      >
        <div style={{ ...featureStyles, position: "relative" }}>
          <Image src={featureImage.src} feature={true} />
          {/* Add checkbox input for deleting multiple images */}
          <input
            type="checkbox"
            name={`image-${featureImage.id}`}
            value={featureImage.id}
            checked={selectedImages.includes(featureImage.id)}
            onChange={handleSelectImage}
            style={{
              position: "absolute",
              top: "5px",
              left: "5px",
              zIndex: "1",
            }}
          />
        </div>

        {remainingImagesG.map((image, index) => (
          <div key={`image-${index}`} style={{ position: "relative" }}>
            <Image src={image.src} />
            {/* Add checkbox input for deleting multiple images */}
            <input
              type="checkbox"
              name={`image-${image.id}`}
              value={image.id}
              checked={selectedImages.includes(image.id)}
              onChange={handleSelectImage}
              style={{
                position: "absolute",
                top: "5px",
                left: "5px",
                zIndex: "1",
              }}
            />
          </div>
        ))}
      </Container>
      {/* Add button to delete selected images */}
      {selectedImages.length > 0 && (
        <div style={{ margin: "10px 0" }}>
          <button onClick={handleDeleteSelected}>
            Delete Selected ({selectedImages.length})
          </button>
        </div>
      )}
    </>
  );
}
