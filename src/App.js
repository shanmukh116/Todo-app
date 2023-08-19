import React, { useState } from 'react'
import './App.css'
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
const App = () => {
  const [todo,setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId,seteditId] = useState(0);
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(editId!==0){
      const updatedTodoList = [...todoList];
      updatedTodoList.forEach((item) => {
        if (item.id === editId) {
          item.todo = todo; 
        }
      });
      setTodoList(updatedTodoList);
      seteditId(0);
      setTodo("");
      return;

    }

    if(todo!==""){
      setTodoList([{id :`${Date.now()}`,todo},...todoList]);
      setTodo("");
    }
  }
  const handleDelete = (id) =>{
    const delTodo = todoList.filter((t)=> t.id!==id);
    setTodoList([...delTodo]); 
  }
  const handleEdit = (id) =>{
    const editTodo = todoList.find((t)=>t.id===id);
    setTodo(editTodo.todo);
    seteditId(id);
     
  }
  return (
    <div className='App'>
     <div className = 'container'>
        <h1>Todo App </h1>
        <TodoForm handleSubmit={handleSubmit} 
                  todo={todo} 
                  setTodo={setTodo} 
                  editId={editId} />

        <TodoList todoList={todoList} handleEdit={handleEdit} handleDelete={handleDelete}/>
     </div>
     <footer className ="footer">Developed by Shanmukh</footer>
    </div>
  )
}

export default App
