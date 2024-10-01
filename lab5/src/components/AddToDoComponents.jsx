import React from "react";

const AddToDoComponent = ({ title = "", onTitleChange, onSubmit}) => {
    return (
        <form>
        <input placeholder="Add new to do" value={title} onChange={onTitleChange} />
        <button onClick={onSubmit}>Add</button>
        </form>
    );
};

export default AddToDoComponent;

