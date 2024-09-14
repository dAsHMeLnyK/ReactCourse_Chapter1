import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AddToDoComponent from './components/AddToDoComponents';
import ToDoTable from './components/ToDoTable';
import SearchInput from './components/SearchInput';

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

    function handleNewTitleChange(event) {
      setNewToDo({id: Math.random(), title: event.target.value})
    }
    function handleSubmit(event) {
      event.preventDefault();
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
  );
}

export default App;
