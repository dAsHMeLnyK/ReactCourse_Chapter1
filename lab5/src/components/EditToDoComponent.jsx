import React, { useState } from "react";

const EditToDoComponent = ({ id, title, onSave, onCancel }) => {
    const [editedTitle, setEditedTitle] = useState(title);
    const [error, setError] = useState(null);

    const handleSaveClick = () => {
        if (!editedTitle.trim()) {
            setError("Title is required");
        } else {
            onSave(id, editedTitle);
            setError(null);
        }

    };

    return (
        <>
            <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                style={{
                    borderColor: error ? "red" : "initial",
                }}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </>
    );
};

export default EditToDoComponent;
