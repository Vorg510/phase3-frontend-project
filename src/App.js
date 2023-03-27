import * as React from "react";
// import logo from './logo.svg';
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const [priority, setPriority] = React.useState("");
  console.log(priority);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Stack spacing={2} direction="row">
        <TextField id="standard-basic" label="Add To-do" variant="standard" />
        <FormControl FormControl fullWidth>
          <InputLabel id="select-label">Priority</InputLabel>
          <Select
            labelId="select-label"
            id="demo-simple-select"
            value={priority}
            label="Priority"
            onChange={(e) => setPriority(e.target.value)}
          >
            <MenuItem value={"high"}>High Priority</MenuItem>
            <MenuItem value={"medium"}>Medium Priority</MenuItem>
            <MenuItem value={"low"}>Low Priority</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">submit</Button>
        </Stack>

        <div>
          <h2>My To-do</h2>
        </div>
      </div>

  );
}

export default App;
