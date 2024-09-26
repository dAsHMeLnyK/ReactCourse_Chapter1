import React from "react";

const DeleteToDoComponent = ({onDelete}) => {
    return (
        <button onClick={onDelete}>Delete</button>
    );
};

export default DeleteToDoComponent;