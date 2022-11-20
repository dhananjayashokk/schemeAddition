import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormControl from "@mui/material/FormControl";

const ToggleButtons = ({ state, setState, options, pos, key }) => {
  const handleChange = (event, newVal) => {
    const changedState = state;
    changedState[pos][key] = newVal;
    setState([...changedState]);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <ToggleButtonGroup
        color="primary"
        value={state[pos][key]}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        {options.map((option, index) => {
          return (
            <ToggleButton sx={{ m: 1, width: 300 }} key={index} value={option}>
              {option.toUpperCase()}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </FormControl>
  );
};

export default ToggleButtons;
