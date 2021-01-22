import API from "../../API";

function setDogBreedsList(breedsList) {
  return {
    type: "SET_DOG_BREEDS_LIST",
    breedsList,
  };
}

const getDogBreedsList = () => {
  return async (dispatch) => {
    try {
      const response = await API("/breeds/list/all", {
        method: "GET",
      });
      dispatch(setDogBreedsList(response.data.message));
    } catch (e) {
      console.log(e);
    }
  };
};

const generateBreedImageRow = () => ({
  type: "GENERATE_BREED_IMAGE_ROW",
});

const setBreedImageRow = (rowData, id) => ({
  type: "SET_BREED_IMAGE_ROW",
  rowData,
  id,
});

function setDogImages(images) {
  return {
    type: "SET_DOG_IMAGES",
    images,
  };
}

function setFetchingImages(bool) {
  return {
    type: "FETCHING_DOG_IMAGES",
    bool
  }
}

const generateImageModal = () => {
  return async (dispatch, getState) => {
    // https://dog.ceo/api/breed/hound/afghan/images/random/3
    dispatch(setFetchingImages(true))
    const { breedImageRows } = getState().dogs;
    try {
      let allDogImages = await Promise.all(
        breedImageRows.map(async (row) => {
          let breedSubbreed =
            row.subBreed !== ""
              ? `${row.breed.toLowerCase()}/${row.subBreed.toLowerCase()}`
              : `${row.breed.toLowerCase()}`;
          let endPoint = `breed/${breedSubbreed}/images/random/${row.imageQuantity}`;
          let rowImages = await API(`/${endPoint}`, { method: "GET" });
          return { breed: row.breed, images: rowImages.data.message };
        })
      );
      dispatch(setDogImages(allDogImages));
    } catch (e) {
      console.log(e);
    }
  };
};

export {
  getDogBreedsList,
  generateBreedImageRow,
  setBreedImageRow,
  generateImageModal,
};
