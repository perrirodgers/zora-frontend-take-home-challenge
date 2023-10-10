import React, { useState } from "react";
import { SearchBar } from "./searchBar";

export const HomeView = () => {

    const [searchKeyword, setSearchKeyword] = useState("");

    return (
        <>
            <div className="main-container">
                <h1 className="align-self-center text-center">Welcome to Unsplash</h1>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <SearchBar value={searchKeyword} setSearchKeyword={setSearchKeyword} onClick={() => { }} />
            </div>
        </>
    )
}