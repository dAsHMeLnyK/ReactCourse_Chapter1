import React, { useState } from "react";

const EditToDoComponent = ({ id, title, onSave, onCancel }) => {
    const [editedTitle, setEditedTitle] = useState(title);

    const handleSaveClick = () => {
        onSave(id, editedTitle);
    };

    return (
        <>
            <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </>
    );
};

export default EditToDoComponent;
