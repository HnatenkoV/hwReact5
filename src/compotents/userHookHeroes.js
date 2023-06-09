import useFetchHeroes from "../hooks/useFetchHeroes";
import HeroList from "./heroList";
import React, {useState} from "react";
import Pagination from "./pagination";
import "../css/style.css"
import {Outlet} from "react-router-dom";
import Hero from "./hero";


const UserHookHeroes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {data, loading, error, maxPage} = useFetchHeroes(
        `character/?page=${currentPage}`
    );


    if (error) {
        return <h1 style={{color: "red"}}> === Error ===</h1>
    }


    return <>
        <Outlet/>
        <div>
        {loading ? <p>Loading...</p> : <HeroList heroList={data}/>}
        <Pagination classNameBtn="btn" currentPage = {currentPage} setCurrentPage = {setCurrentPage} maxPages={maxPage}/>
        </div>
    </>

}

export default UserHookHeroes
