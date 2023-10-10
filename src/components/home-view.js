import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { PhotoView } from "./photo-view";
import { SearchBar } from "./searchBar";
import { PaginationView } from "../common/pagination-view";
import { getAllPhotos, getSearchedPhoto } from "../common/store/actions/photos-actions";


export const HomeView = () => {
    // for dispatching api
    const dispatch = useDispatch();

    // for getting data from redux state
    const allPhotos = useSelector(({ photos }) => photos?.allPhotos);

    // for search keyword
    const [searchKeyword, setSearchKeyword] = useState("");
    // for orderby filter
    const [orderBy, setOrderBy] = useState("Select Order");
    // for color filter
    const [color, setColor] = useState("Select Color");
    // for page numbers
    const [pageNumber, setPageNumber] = useState(1);

    // for fetching all photos from api
    useEffect(() => {
        dispatch(getAllPhotos())
        if (searchKeyword.length < 1) {
            // when no search query available to refresh all data
            dispatch(getAllPhotos())
        }
    }, [dispatch, searchKeyword])

    // for search filter
    useEffect(() => {
        if (searchKeyword.length > 0) {
            dispatch(getSearchedPhoto(searchKeyword, pageNumber, orderBy, color))
        }
    }, [dispatch, searchKeyword, orderBy, pageNumber, color])


    return (
        <>
            <div className="main-container">
                <h1 className="align-self-center text-center">Welcome to Unsplash</h1>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <SearchBar
                    value={searchKeyword}
                    setSearchKeyword={setSearchKeyword}
                    onClick={() => { dispatch(getSearchedPhoto(searchKeyword, pageNumber)) }}
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
                <PhotoView photoData={allPhotos} />
            </div>

            <div className="pagination d-flex justify-content-center">
                <PaginationView
                    totalPages={1}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                />
            </div>
        </>
    );
};
