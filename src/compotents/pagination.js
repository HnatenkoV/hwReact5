import React, {useState} from "react";


const Pagination = ({currentPage, setCurrentPage, maxPages}) => {
        let [isDisable, setIsDisable] = useState(false)


    if (currentPage <= 1) {
        isDisable = true
    }

    const nextPage = () => {
        setCurrentPage(currentPage+1)


    }
    const prevPage = () => {
        setCurrentPage(currentPage-1)
    }


    return (
        <>
            <button className="btn" disabled={isDisable} onClick={prevPage}>Prev</button>
            <button className="btn" disabled={currentPage === maxPages} onClick={nextPage}>Next</button>
        </>
    )
}

export default Pagination;