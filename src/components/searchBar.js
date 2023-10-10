import React from "react";

export const SearchBar = ({ value, setSearchKeyword, onClick }) => {
    // search bar component to search data
    return (
        <>
            <div className="searchFilter">
                Search
                <input type="text" style={{ marginLeft: '5px' }} value={value} onChange={(e) => {
                    setSearchKeyword(e.target.value.trim());
                }} placeholder="Enter keyword" />
                <i className="fa fa-search " onClick={onClick} />
            </div>
        </>
    )
}