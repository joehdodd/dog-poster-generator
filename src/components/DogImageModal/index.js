import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DogImageModalView from "./DogImageModalView";
import WithDogImagesLoading from "../WithDogImagesLoading";
import Modal from "@material-ui/core/Modal";

import "./DogModal.css";

const ViewWithLoading = WithDogImagesLoading(DogImageModalView);

const useStyles = makeStyles((theme) => ({
  paper: {
    overflowY: "scroll",
    maxHeight: "75%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: "4px",
    padding: "16px",
    margin: "16px auto"
  },
}));

export default ({ dogImages, open, handleClose, isFetching }) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose}>
      <div
        className={`${classes.paper} dog-image-modal`}
      >
        <ViewWithLoading
          isFetching={isFetching}
          dogImages={dogImages}
          classes={classes}
        />
      </div>
    </Modal>
  );
};
