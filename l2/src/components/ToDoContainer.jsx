import { useState } from 'react';
import React from 'react'
import AddToDoComponent from './AddToDoComponents';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';


const ToDoContainer = () => {
    const [toDos, setToDos] = useState([]);
    const [newToDo, setNewToDo] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    function handleNewTitleChange(event) {
        setNewToDo({id: Date.now(), title: event.target.value})
      }
      function handleSubmit(event) {
        event.preventDefault();
  
        if (!newToDo || !newToDo.title.trim()) {
          alert("Please enter a valid to-do title.");
          return;
        }
        setToDos([...toDos, newToDo]);
        setNewToDo(null);
      }
      function handleDelete(id) {
        const updatedToDos = toDos.filter(toDo => toDo.id !== id);
        setToDos(updatedToDos);
      }
      function handleSearchChange(event) {
        setSearchTerm(event.target.value);
      }
  
      const filteredToDos = toDos.filter (toDo =>
        toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <>
    <AddToDoComponent
        title={newToDo?.title }
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />

      <SearchInput
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
    </>
  )
}

export default ToDoContainer;