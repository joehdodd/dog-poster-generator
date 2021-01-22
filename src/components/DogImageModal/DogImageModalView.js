import React from "react";

export default ({ classes, dogImages }) => (
  <div
    style={{
      top: "32px",
      left: "25%",
    }}
    className={classes.paper}
  >
    <div className="breed-images-wrapper">
      {dogImages.map((dogImageRow) => (
        <>
          <h2>Breed: {dogImageRow.breed}</h2>
          <div className="breed-images-container">
            {dogImageRow.images.map((img) => (
              <img src={img} alt={`Photo of a ${dogImageRow.breed}`} />
            ))}
          </div>
        </>
      ))}
    </div>
  </div>
);
