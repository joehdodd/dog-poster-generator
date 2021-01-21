import React from "react";
import { connect } from "react-redux";
import { getDogBreedsList } from "./state/actions/dogs";


import './App.css';

function App({ getDogBreedsList, breedsList }) {
  React.useEffect(() => {
    getDogBreedsList();
  }, []);
  return (
    <div className="App">
    </div>
  );
}

const mapStateToProps = (state) => {
  const { dogs } = state;
  return {
    breedsList: dogs.breedsList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDogBreedsList: () => {
      dispatch(getDogBreedsList())
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
