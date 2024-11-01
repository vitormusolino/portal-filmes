import { useState, useEffect } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import BemVindo from "../components/BemVindo";


export default function Home(){

    const [filmes,setFilmes] = useState([])
    const [terror,setTerror] = useState([])
    const [animacao,setAnimacao] = useState([])

    useEffect( () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
        .then( results => results.json())
        .then( data => setFilmes(data.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("Cabo"))
        
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br&with_genres=27')
        .then( results => results.json())
        .then( data => setTerror(data.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("Cabo"))

        fetch('https://api.themoviedb.org/3/discover/movie?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br&with_genres=16')
        .then( results => results.json())
        .then( data => setAnimacao(data.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("Cabo"))
    },[])

    return(
        <>

                <BemVindo/>
                
                <CardContainer titulo="Melhores Filmes">
                    {filmes
                    .filter(filmes => filmes.vote_average >= 7.0)
                    .map(filmes=>(
                        <MovieCard key={filmes.id} {...filmes}/>
                    ))}
                </CardContainer>

                <CardContainer titulo="Filmes de Terror">
                    {terror
                    .map(terror=>(
                        <MovieCard key={terror.id} {...terror}/>
                    ))}
                </CardContainer>

                <CardContainer titulo="Animações">
                    {animacao
                    .map(animacao=>(
                        <MovieCard key={animacao.id} {...animacao}/>
                    ))}
                </CardContainer>
        </>
    )
}