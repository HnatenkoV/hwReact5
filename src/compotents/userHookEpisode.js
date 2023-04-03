import useFetchHeroes from "../hooks/useFetchHeroes";
import HeroList from "./heroList";
import Pagination from "./pagination";
import React, {useState} from "react";
import useFetchEpisode from "../hooks/useFetchEpisode";


const UserHookEpisode = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data, loading, error, maxPage} = useFetchEpisode(
        `episode/?page=${currentPage}`
    );


    if (error) {
        return <h1 style={{color: "red"}}> === Error ===</h1>
    }

    return <>
        <div>
        {loading ? <p>Loading...</p> : <HeroList EpisodeList={data}/>}
        <Pagination classNameBtn="btn-episode" currentPage = {currentPage} setCurrentPage = {setCurrentPage} maxPages={maxPage}/>
        </div>
    </>

}



export default UserHookEpisode;