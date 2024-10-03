import React, { useState } from "react";
import DeleteToDoComponent from "./DeleteToDoComponent";
import EditToDoComponent from "./EditToDoComponent";

const ToDoTable = ({ toDos, onDelete, onEdit }) => {
    const [editingId, setEditingId] = useState(null);

    const handleEditClick = (id) => {
        setEditingId(id);
    };

    const handleSave = (id, newTitle) => {
        onEdit(id, newTitle);
        setEditingId(null);
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {toDos.map((toDo) => (
                    <tr key={toDo.id.toString()}>
                        <td>{toDo.id.toString()}</td>
                        <td>
                            {editingId === toDo.id ? (
                                <EditToDoComponent
                                    id={toDo.id}
                                    title={toDo.title}
                                    onSave={handleSave}
                                    onCancel={handleCancel}
                                />
                            ) : (
                                toDo.title
                            )}
                        </td>
                        <td>
                            {editingId === toDo.id ? null : (
                                <>
                                    <button onClick={() => handleEditClick(toDo.id)}>
                                        Edit
                                    </button>
                                    <DeleteToDoComponent
                                        onDelete={() => onDelete(toDo.id)}
                                    />
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ToDoTable;
