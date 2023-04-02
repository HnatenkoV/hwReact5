import useFetchHeroes from "../hooks/useFetchHeroes";
import HeroList from "./heroList";
import Pagination from "./pagination";
import React, {useState} from "react";

const UserHookLocation = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data, loading, error, maxPage} = useFetchHeroes(
        `location/?page=${currentPage}`
    );


    if (error) {
        return <h1 style={{color: "red"}}> === Error ===</h1>
    }

    return <>
        <div>
        {loading ? <p>Loading...</p> : <HeroList heroList={data}/>}
        <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage} maxPages={maxPage}/>
        </div>
    </>

}



export default UserHookLocation;