import React from "react";
import { connect } from "react-redux";
import {
  generateBreedImageRow,
  getDogBreedsList,
  setBreedImageRow,
} from "../state/actions/dogs";

import BreedForm from "./BreedForm";

import Button from "@material-ui/core/Button";

import "./App.css";

function App({
  getDogBreedsList,
  breedsList,
  breedImageRows,
  generateBreedImageRow,
  setBreedImageRow,
}) {
  React.useEffect(() => {
    getDogBreedsList();
  }, []);

  const handleGenerateModal = () => {
    console.log("cool");
  };

  const handleGenerateBreedImageRow = () => {
    generateBreedImageRow();
  };

  const handleSetBreedImageRow = (rowData, id) => {
    setBreedImageRow(rowData, id);
  };
  return (
    <div className="App">
      <div className="app-section-wrapper">
        {breedImageRows.map((row, index) => (
          <BreedForm
            key={row.id}
            id={row.id}
            breedsList={breedsList}
            isLast={index + 1 === breedImageRows.length}
            generateBreedImageRow={handleGenerateBreedImageRow}
            setBreedImageRow={handleSetBreedImageRow}
          />
        ))}
        <Button
          variant="contained"
          onClick={() => handleGenerateModal()}
          disabled={breedImageRows[0].breed === ""}
        >
          Generate Image Modal
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { dogs } = state;
  return {
    breedsList: dogs.breedsList,
    breedImageRows: dogs.breedImageRows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDogBreedsList: () => {
      dispatch(getDogBreedsList());
    },
    generateBreedImageRow: () => {
      dispatch(generateBreedImageRow());
    },
    setBreedImageRow: (rowData, id) => {
      dispatch(setBreedImageRow(rowData, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
