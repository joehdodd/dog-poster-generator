import React from "react";
import { connect } from "react-redux";
import { getDogBreedsList } from "./state/actions/dogs";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function App({ getDogBreedsList, breedsList }) {
  const [breedSelectValue, setBreedSelectValue] = React.useState('');
  const [subBreedSelectValue, setSubBreedSelectValue] = React.useState('');
  const [selectedBreed, setSelectedBreed] = React.useState({ breed: "", subBreeds: [] });
  const classes = useStyles();
  const handleSelectBreed = e => {
    const { value : breedValue } = e.target;
    setBreedSelectValue(breedValue);
    const selectedBreed = breedsList.find(breed => breed.breed === breedValue);
    setSelectedBreed(selectedBreed);
  }
  const handleSelectSubBreed = e => {
    const { value: subBreedValue } = e.target;
    setSubBreedSelectValue(subBreedValue);
  }
  React.useEffect(() => {
    getDogBreedsList();
  }, []);
  return (
    <div className="App">
      <FormControl className={classes.formControl}>
        <InputLabel id="breed-select">Breed</InputLabel>
        <Select
          labelId="breed-select"
          id="breed-select"
          value={breedSelectValue}
          onChange={handleSelectBreed}
        >
          <MenuItem value="">
            <em>Please select a breed...</em>
          </MenuItem>
          {!!breedsList.length && breedsList.map(breed => (
            <MenuItem value={breed.breed}>{breed.breed}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Breed</FormHelperText>
      </FormControl>
      {!!selectedBreed.subBreeds.length && 
      <FormControl className={classes.formControl}>
        <InputLabel id="breed-select">Sub-Breed</InputLabel>
        <Select
          labelId="breed-select"
          id="breed-select"
          value={subBreedSelectValue}
          onChange={handleSelectSubBreed}
        >
          <MenuItem value="">
            <em>Please select a sub-breed...</em>
          </MenuItem>
          {selectedBreed.subBreeds.map(breed => (
            <MenuItem value={breed}>{breed}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Sub-Breed</FormHelperText>
      </FormControl>  }
    </div>
  );
}

const mapStateToProps = (state) => {
  const { dogs } = state;
  return {
    breedsList: dogs.breedsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDogBreedsList: () => {
      dispatch(getDogBreedsList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
