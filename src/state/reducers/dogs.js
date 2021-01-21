export default (
  state = {
    breedsList: [],
  },
  action
) => {
  switch (action.type) {
    case "SET_DOG_BREEDS_LIST": {
      return {
        ...state,
        breedsList: Object.entries(
          action.breedsList
        ).map(([breed, subBreed]) => ({
          breed: breed,
          subBreeds: [...subBreed],
        })),
      };
    }
    default:
      return state;
  }
};
