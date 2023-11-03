export default function Image({ src, feature = false }) {
    const imageStyles = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      boxShadow: feature ? "0 0 10px rgba(0, 0, 0, 0.3)" : "none",
      borderRadius: feature ? "10px" : "0",
      transition: "transform 0.2s ease-out",
      transform: "scale(1)",
      ":hover": {
        transform: "scale(1.05)",
        cursor: "pointer",
      },
    };
  
    return (
      <div className={`image ${feature ? "feature-image" : ""}`}>
        <img src={src} style={imageStyles} alt="" />
      </div>
    );
  }


