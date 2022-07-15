import React from 'react'
import Button from '@mui/material/Button';
import TodoListTable from './TodoListTable';
import {  useNavigate } from "react-router-dom";

function TodoList() {

  const navigate = useNavigate()

  const  handleAddTodo = () => {
    navigate("new")
  }

  return (
    <div>
        <Button
         variant="contained"
          disableElevation
          sx={{ textAlign: 'center' , margin : ' 20px auto'  , display : 'flex' }}
          onClick = {() => handleAddTodo()}
          >
           Add new todo
         </Button>
         <TodoListTable />
    </div>

  )
}

export default TodoList