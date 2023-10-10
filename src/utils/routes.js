import React from "react";
import { HomeView } from "../components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// initial routes
export const Router = () => {
    return (
        <React.Fragment>
            <BrowserRouter>

                <Routes>
                    <Route exact={true} path="/" element={<HomeView />} />

                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
};
