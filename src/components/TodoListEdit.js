import React from 'react'
import Button from '@mui/material/Button';
import TodoListForm from './TodoListForm';
import { Typography } from '@mui/material';

function TodoListEdit() {
  return (
    <div>
       <Typography sx={{ justifyContent : 'center' , display : 'flex'}} variant="h4" component="h2">
        Edit Todo
       </Typography>
         <TodoListForm />
    </div>
  )
}

export default TodoListEdit
