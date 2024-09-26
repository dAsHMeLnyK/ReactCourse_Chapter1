import React from "react";
import DeleteToDoComponent from "./DeleteToDoComponent";

const ToDoTable = ({toDos, onDelete}) => {
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
                {toDos.map((toDo) => {
                    return (
                        <tr key={toDo.id.toString()}>
                            <td>{toDo.id.toString()}</td>
                            <td>{toDo.title}</td>
                            <td>
                                <DeleteToDoComponent onDelete={() => onDelete(toDo.id)}/>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ToDoTable;
