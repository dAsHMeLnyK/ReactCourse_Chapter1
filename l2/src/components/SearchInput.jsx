import React from "react";

const SearchInput = ({ searchTerm, onSearchChange}) => {
    return (
        <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={onSearchChange}
        />
    );
};

export default SearchInput;