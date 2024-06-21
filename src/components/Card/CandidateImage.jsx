import React from "react";

function CandidateImage({ imageUrl, altText }) {
  return (
    <div>
      {" "}
      <img
        src={imageUrl}
        alt={altText}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
    </div>
  );
}

export default CandidateImage;
