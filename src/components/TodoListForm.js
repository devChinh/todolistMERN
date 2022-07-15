import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./global.css";

function TodoListForm() {
  const { id } = useParams();
  console.log("============= id", id);
  const isEdit = id === undefined;
  console.log("============= isEdit", isEdit);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [checkTodo, setCheckTodo] = useState(false);
  const [todoName, setTodoName] = useState("");

  const handleFetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/todolist/${id}`);
      setData(response.data);
      setCheckTodo(response.data.checkTodo)
        setTodoName(response.data.todoName)
    } catch (error) {
      console.log("============= error", error);
    }
  };

  useEffect(() => {
    if (!isEdit) {
      handleFetchData();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataPost = {
      checkTodo,
      todoName,
    };

    if (isEdit) {
      await axios.post("http://localhost:8080/api/todolist", dataPost);
      alert("Thêm mới thành công");
      navigate("/");
    } else {
      await axios.put(`http://localhost:8080/api/todolist/${id}`, dataPost);
      alert("Sửa thành công");
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <TextField
            id="outlined-password-input"
            label="Todo Name"
            type="text"
            value={todoName}
            autoComplete="current-password"
            sx={{ marginLeft: "50px", width: "40%" }}
            onChange={(e) => setTodoName(e.target.value)}
          />

          <div className="check">
            <Typography variant="h6">Check todo</Typography>
            <Button onClick={() => setCheckTodo(!checkTodo)}>
              {checkTodo ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </Button>
          </div>
        </div>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          // onChange={(e) => setCheckTodo(!checkTodo)}
          sx={{ margin: "50px auto", width: "150px", display: "block" }}
        >
          {id ? "SAVE" : "ADD"}
        </Button>
      </form>
    </div>
  );
}

export default TodoListForm;
