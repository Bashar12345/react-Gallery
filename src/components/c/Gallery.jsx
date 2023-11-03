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