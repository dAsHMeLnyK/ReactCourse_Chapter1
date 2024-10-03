import React, { useState } from 'react';
import AddToDoComponent from './AddToDoComponents';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';
import useGetAllToDo from '../hooks/useGetAllToDo';
import Loader from './Loader';

const ToDoContainer = () => {
    const { isLoading, data: toDos, error, setData: setToDos } = useGetAllToDo();
    const [newToDo, setNewToDo] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    function handleNewTitleChange(event) {
        setNewToDo({ id: Date.now(), title: event.target.value });
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

    function handleEdit(id, newTitle) {
        const updatedToDos = toDos.map(toDo =>
            toDo.id === id ? { ...toDo, title: newTitle } : toDo
        );
        setToDos(updatedToDos);
    }

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    const filteredToDos = toDos.filter(toDo =>
        toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Loader isLoading={isLoading}>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <AddToDoComponent
                        title={newToDo?.title}
                        onTitleChange={handleNewTitleChange}
                        onSubmit={handleSubmit}
                    />
                    <SearchInput
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                    />
                    {filteredToDos.length > 0 ? (
                        <ToDoTable
                            toDos={filteredToDos}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    ) : (
                        <p>No to-dos found.</p>
                    )}
                </>
            )}
        </Loader>
    );
};

export default ToDoContainer;
