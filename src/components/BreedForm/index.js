import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./BreedForm.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default ({
  id,
  breedsList,
  generateBreedImageRow,
  setBreedImageRow,
  isLast,
}) => {
  const [breedFormValues, setBreedFormValue] = React.useState({
    breed: "",
    subBreed: "",
    imageQuantity: 1,
  });
  const classes = useStyles();

  const [selectedBreed, setCurrentBreed] = React.useState({
    breed: "",
    subBreeds: [],
  });

  const handleBreedFormChange = (e) => {
    const { name: breedFormName, value: breedFormValue } = e.target;
    setBreedFormValue((breedFormValues) => ({
      ...breedFormValues,
      [breedFormName]: breedFormValue,
    }));

    if (breedFormName === "breed") {
      const selectedBreed = breedsList.find(
        (breed) => breed.breed === breedFormValue
      );
      setCurrentBreed(selectedBreed);
    }
    setBreedImageRow({ [breedFormName]: breedFormValue }, id);
  };
  return (
    <div className="breed-form-container">
      <FormControl className={classes.formControl}>
        <InputLabel id="breed-select">Breed</InputLabel>
        <Select
          required
          labelId="breed-select"
          id="breed-select"
          name="breed"
          value={breedFormValues.breed}
          onChange={handleBreedFormChange}
        >
          <MenuItem value="">
            <em>Please select a breed...</em>
          </MenuItem>
          {!!breedsList.length &&
            breedsList.map((breed) => (
              <MenuItem value={breed.breed}>{breed.breed}</MenuItem>
            ))}
        </Select>
      </FormControl>
      {!!selectedBreed.subBreeds.length && (
        <FormControl className={classes.formControl}>
          <InputLabel id="sub-breed-select">Sub-Breed</InputLabel>
          <Select
            required
            labelId="sub-breed-select"
            id="sub-breed-select"
            name="subBreed"
            value={breedFormValues.subBreed}
            onChange={handleBreedFormChange}
          >
            <MenuItem value="">
              <em>Please select a sub-breed...</em>
            </MenuItem>
            {selectedBreed.subBreeds.map((breed) => (
              <MenuItem value={breed}>{breed}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <FormControl className={classes.formControl}>
        <TextField
          id="image-quantity"
          label="Image Quantity"
          type="number"
          name="imageQuantity"
          value={breedFormValues.imageQuantity}
          onChange={handleBreedFormChange}
          InputProps={{
            inputProps: {
              min: 1,
              max: 50,
            },
          }}
        />
      </FormControl>
      {isLast && (
        <Button
          variant="contained"
          onClick={() => generateBreedImageRow()}
          disabled={selectedBreed.breed === ""}
        >
          Add a Row
        </Button>
      )}
    </div>
  );
};
