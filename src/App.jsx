import React from "react";
// import logo from './logo.svg';
import "./App.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  const [priority, setPriority] = React.useState("");
  const [todo, setToDo] = React.useState("");
  const [list, setList] = React.useState([]);
  const handleTodo = (input) => {
    console.log("input", input);
    let updateList = [...list];
    updateList.push(input);
    console.log("updateList", updateList);
    setList(updateList);
  };
  console.log("list", list);
  console.log(todo);

  React.useEffect(() => {
    fetch("http://localhost:9292")
      .then((r) => r.json())
      .then((data) => console.log("data", data));
  }, []);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Stack spacing={2} direction="row">
        <TextField
          id="standard-basic"
          label="Add To-do"
          variant="standard"
          onChange={(e) => setToDo(e.target.value)}
        />
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
        <Button variant="contained" onClick={() => handleTodo(todo)}>
          submit
        </Button>
      </Stack>
      <div>
        <h2>My To-do</h2>
        {list.map((item) => {
          console.log("list2", item);
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
