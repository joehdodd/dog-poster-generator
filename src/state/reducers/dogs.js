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
          breed: `${breed.charAt(0).toUpperCase() + breed.slice(1)}`,
          subBreeds: [...subBreed],
        })),
      };
    }
    default:
      return state;
  }
};
