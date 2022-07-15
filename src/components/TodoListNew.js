import React from 'react'
import Button from '@mui/material/Button';
import TodoListForm from './TodoListForm';
import { Typography } from '@mui/material';

function TodoListNew() {
  return (
    <>
       <Typography sx={{ justifyContent : 'center' , display : 'flex'}} variant="h4" component="h2">
        Add Todo
       </Typography>;
      <TodoListForm />
    </>
  )
}

export default TodoListNew