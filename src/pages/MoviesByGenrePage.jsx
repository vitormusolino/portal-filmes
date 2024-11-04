import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function MoviesByGenrePage(){
    
    const [genero,setGenero] = useState([])
    const {id} = useParams()

    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br&with_genres=${id}`)
        .then( results => results.json())
        .then( data => setGenero(data.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("Cabo"))
        
    },[])

    return(
        <>
        <h1>Filmes do Genêro:</h1>
        <MovieCard />
        </>
    )
}