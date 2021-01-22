import React from "react";
import { connect } from "react-redux";
import {
  generateBreedImageRow,
  getDogBreedsList,
  setBreedImageRow,
  generateImageModal,
} from "../state/actions/dogs";

import BreedForm from "./BreedForm";
import DogImageModal from "./DogImageModal";

import Button from "@material-ui/core/Button";

import "./App.css";

function App({
  getDogBreedsList,
  breedsList,
  breedImageRows,
  generateBreedImageRow,
  setBreedImageRow,
  generateImageModal,
  dogImages,
  isFetching,
}) {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  React.useEffect(() => {
    getDogBreedsList();
  }, []);

  const handleGenerateModal = async () => {
    await generateImageModal();
    handleOpen();
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
          Generate &amp; Open Image Modal
        </Button>
        <DogImageModal
          isFetching={isFetching}
          dogImages={dogImages}
          open={modalOpen}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { dogs } = state;
  return {
    breedsList: dogs.breedsList,
    breedImageRows: dogs.breedImageRows,
    dogImages: dogs.dogImages,
    isFetching: dogs.isFetching,
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
    generateImageModal: () => {
      dispatch(generateImageModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
