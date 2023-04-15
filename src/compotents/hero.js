import React from 'react';
import { useParams} from "react-router-dom";
import useFetchHeroes from "../hooks/useFetchHeroes";

const Hero = () => {
    const {id} = useParams()
    const { data, loading }  = useFetchHeroes(
        `character/${id}`
    );


    return (
        <div style={{padding:"30px"}}>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <div className="hero-data">
                <img style={{width:"150px", height: "150px"}} src={data.image} alt=""/>
                <h2>{data.name}</h2>
                <p>{data.status}</p>
                <p>{data.species}</p>
            </div>
        )}
        </div>
    );
};

export default Hero;