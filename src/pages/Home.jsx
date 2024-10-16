import { useState, useEffect } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from '../data/movies.json'

export default function Home(){

    const [filmes,setFilmes] = useState([])
    

    useEffect( () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
        .then( results => results.json())
        .then( data => setFilmes(data.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("Cabo"))
    },[])

    return(
        <>

                <CardContainer titulo="Melhores Filmes">
                    {filmes
                    .filter(filmes => filmes.vote_average >= 7.2)
                    .map(filmes=>(
                        <MovieCard key={filmes.id} {...filmes}/>
                    ))}
                </CardContainer>

                <CardContainer titulo="Melhores Filmes">
                    {filmes
                    .filter(filmes => filmes.popularity >= 1300)
                    .map(filmes=>(
                        <MovieCard key={filmes.id} {...filmes}/>
                    ))}
                </CardContainer>

                <CardContainer titulo="Filmes Novos">
                    {filmes
                    .filter(filmes => filmes.release_date > '2024-09-01')
                    .map(filmes=>(
                        <MovieCard key={filmes.id} {...filmes}/>
                    ))}
                </CardContainer>
        </>
    )
}