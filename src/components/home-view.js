import React, { useState } from "react";
import { SearchBar } from "./searchBar";
import { Dropdown } from "react-bootstrap";
import { PhotoView } from "./photo-view";

export const HomeView = () => {
    // for search keyword
    const [searchKeyword, setSearchKeyword] = useState("");
    // for orderby filter
    const [orderBy, setOrderBy] = useState("Select Order");
    // for color filter
    const [color, setColor] = useState("Select Color");

    return (
        <>
            <div className="main-container">
                <h1 className="align-self-center text-center">Welcome to Unsplash</h1>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <SearchBar
                    value={searchKeyword}
                    setSearchKeyword={setSearchKeyword}
                    onClick={() => { }}
                />
            </div>
            <div className="dropdownContainer">
                <Dropdown
                    drop
                    className="dropdown filtstatus"
                    onSelect={(e) => {
                        setOrderBy(e);
                    }}
                >
                    <span className="sortingShow">

                        <Dropdown.Toggle>
                            <span>{orderBy}</span>
                        </Dropdown.Toggle>

                    </span>
                    <Dropdown.Menu
                        variant=""
                        id="style-5"
                        className="cusDrupdown"
                    >
                        <Dropdown.Item eventKey={"latest"} key={"latest"}>
                            {"latest"}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey={"relevant"} key={"relevant"}>
                            {"relevant"}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                    drop
                    className="dropdown filtstatus"
                    onSelect={(e) => {
                        setColor(e);
                    }}
                >
                    <span className="sortingShow">

                        <Dropdown.Toggle>
                            <span>{color}</span>
                        </Dropdown.Toggle>

                    </span>
                    <Dropdown.Menu
                        className="cusDrupdown"
                    >
                        <Dropdown.Item eventKey={"green"} key={"green"}>
                            {"latest"}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey={"red"} key={"red"}>
                            {"red"}
                        </Dropdown.Item>
                        <Dropdown.Item eventKey={"blue"} key={"blue"}>
                            {"blue"}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="photos-gallery-section">
                <PhotoView />

            </div>
        </>
    );
};
