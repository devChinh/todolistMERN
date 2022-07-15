import { TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Icon from "@mui/material/Icon";
import PropTypes from "prop-types";
import { pink } from "@mui/material/colors";
import axios from "axios";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const TodoListTable = (props) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/todolist");
      setTodos(response.data);
    } catch (e) {
      console.log("============= e", e);
    }
  };

  console.log(todos);

  useEffect(() => {
    handleFetchData();
  }, [loading]);

  const handleDelete = async (id) => {
    console.log("delete", id);
    try {
      await axios.delete(
        // call api
        `http://localhost:8080/api/todolist/${id}`
      );
      setTodos(todos.filter((todo) => id !== todo.id));
    } catch (e) {
      console.log("============= e", e);
    }
    setLoading(!loading);
    alert("xoá thành công");
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <TableContainer sx={{width : '50%' , display : 'flex' , margin : 'auto'}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Todo</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center" width={100}>
                Action
              </TableCell>
              <TableCell align="center" width={100}>
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell align="center">{todo.todoName}</TableCell>
                <TableCell align="center">
                  {todo.checkTodo ? "Done" : "Doing"}
                </TableCell>
                <TableCell>
                  <Button variant="text">
                    <DeleteIcon
                      sx={{ color: pink[500] }}
                      onClick={() => handleDelete(todo._id)}
                    />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="text">
                    <EditIcon
                      sx={{ color: pink[500] }}
                      onClick={() => handleEdit(todo._id)}
                    ></EditIcon>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
TodoListTable.defaultProps = {
  rows: [],
};

TodoListTable.propTypes = {
  rows: PropTypes.array,
};

export default React.memo(TodoListTable);
