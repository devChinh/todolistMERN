import React from "react";
import TodoList from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoListEdit from "./components/TodoListEdit";
import TodoListNew from "./components/TodoListNew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <React.Fragment>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/edit/:id" element={<TodoListEdit />} />
          <Route path="/new" element={<TodoListNew />} />
        </React.Fragment>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
