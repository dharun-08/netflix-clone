import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({title,fetchUrl,isLargeRow}) => {
    // console.log("Process env "+process.env.REACT_APP_API);
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`);
            setMovies(response.data.results);
            return response;
        };
        fetchData()
    },[]);
    console.log(movies)
    const handleClick = () =>{

    }
  return (
    <div>
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map((movie) => (
                    <img 
                    onClick={() => handleClick(movie)}
                    key={movie.id}
                    className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Row