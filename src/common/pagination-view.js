import React from "react";

// pagination component with conditional rendering
export const PaginationView = ({ totalPages, pageNumber, setPageNumber }) => {

    const pageNumbers = totalPages >= 1 ? [...Array(totalPages + 1)?.keys()]?.slice(1) : 0;

    const nextPage = () => {
        if (pageNumber !== totalPages - 1 && totalPages !== 1) setPageNumber(pageNumber + 1);
    };
    const prevPage = () => {
        if (pageNumber !== 0) setPageNumber(pageNumber - 1);
    };

    return (
        <>

            <ul className="d-flex justify-content-between p-1 " style={{ listStyle: "none" }}>

                <li className="p-1 " ><button onClick={prevPage} type="button" className={pageNumber === 0 ? "cursor-no-drop" : ""}>Previous</button></li>

                {pageNumbers?.length >= 0 ? pageNumbers?.map((pgNumber) => (
                    <li className="p-1 " key={pgNumber}  >
                        <button type="button" onClick={() => setPageNumber(pgNumber - 1)} className={pageNumber + 1 === pgNumber ? "active" : ""}>{pgNumber <= 10 ? "0" + pgNumber : pgNumber}</button>
                    </li>
                ))
                    :
                    <li className="p-1 active">
                        <button >01</button>
                    </li>
                }

                <li className="p-1 "> <button type="button" className={pageNumber === totalPages - 1 ? "cursor-no-drop" : ""} onClick={nextPage}>Next</button> </li>

            </ul>


        </>
    );
};
