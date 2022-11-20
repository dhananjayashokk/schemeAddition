import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const TextFieldInput = ({ label }) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <TextField id="outlined-basic" label={label} variant="outlined" />
    </FormControl>
  );
};

export default TextFieldInput;
