function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export default (
  state = {
    breedsList: [],
    breedImageRows: [
      { id: uuidv4(), breed: "", subBreed: "", imageQuantity: 1 },
    ],
    dogImages: [],
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case "SET_DOG_BREEDS_LIST": {
      return {
        ...state,
        breedsList: Object.entries(action.breedsList).map(
          ([breed, subBreed]) => ({
            breed: `${breed.charAt(0).toUpperCase() + breed.slice(1)}`,
            subBreeds: [
              ...subBreed.map(
                (sB) => `${sB.charAt(0).toUpperCase() + sB.slice(1)}`
              ),
            ],
          })
        ),
      };
    }
    case "GENERATE_BREED_IMAGE_ROW": {
      return {
        ...state,
        breedImageRows: [
          ...state.breedImageRows,
          { id: uuidv4(), breed: "", subBreed: "", imageQuantity: 1 },
        ],
      };
    }
    case "SET_BREED_IMAGE_ROW": {
      const updatedRows = state.breedImageRows.map((row) =>
        row.id === action.id ? { ...row, ...action.rowData } : row
      );
      return {
        ...state,
        breedImageRows: [...updatedRows],
      };
    }
    case "SET_DOG_IMAGES": {
      console.log(action)
      return {
        ...state,
        dogImages: [...action.images],
        isFetching: false
      }
    }
    default:
      return state;
  }
};
