import React from "react";

export default ({ dogImages }) => (
  <div className="breed-images-wrapper">
    {dogImages.map((dogImageRow, index) => (
      <div key={`${dogImageRow}_${index}`}>
        <h2>Breed: {dogImageRow.breed}</h2>
        {dogImageRow.subBreed !== "" && (
          <h4>Sub-Breed: {dogImageRow.subBreed}</h4>
        )}
        <div className="breed-images-container">
          {dogImageRow.images.map((img, i) => (
            <img key={i} src={img} alt={`${dogImageRow.breed}`} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
