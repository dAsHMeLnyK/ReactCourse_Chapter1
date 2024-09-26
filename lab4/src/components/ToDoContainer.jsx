import { useState, useEffect } from 'react';
import React from 'react';
import AddToDoComponent from './AddToDoComponents';
import SearchInput from './SearchInput';
import ToDoTable from './ToDoTable';
import useGetAllToDo from '../hooks/useGetAllToDo';
import LoadingComponent from './LoadingComponent';

const ToDoContainer = () => {
    const { isLoading, data: toDosFromAPI, error } = useGetAllToDo();
    const [toDos, setToDos] = useState([]);
    const [newToDo, setNewToDo] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (toDosFromAPI.length > 0) {
            console.log("Завантажені to-dos з API:", toDosFromAPI);
            setToDos(toDosFromAPI);
        }
    }, [toDosFromAPI]);

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

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    const filteredToDos = toDos.filter(toDo =>
        toDo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    if (isLoading) {
        return <LoadingComponent />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
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
                <ToDoTable toDos={filteredToDos} onDelete={handleDelete} />
            ) : (
                <p>No to-dos found.</p>
            )}
        </>
    );
};

export default ToDoContainer;
