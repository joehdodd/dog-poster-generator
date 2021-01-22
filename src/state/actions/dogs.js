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

export { getDogBreedsList, generateBreedImageRow, setBreedImageRow };
