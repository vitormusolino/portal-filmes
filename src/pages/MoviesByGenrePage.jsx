import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function MoviesByGenrePage() {
    const [genero, setGenero] = useState([]);
    const { id } = useParams();  

    useEffect(() => {
        console.log(`Buscando filmes para o gênero com id: ${id}`); 
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br&with_genres=${id}`)
            .then((results) => results.json())
            .then((data) => setGenero(data.results))  
            .catch((erro) => console.log(erro))
            .finally(() => console.log("Carregamento finalizado"));
    }, [id]);  

    return (
        <>
            <h1 className="text-center text-2xl font-bold p-10">Filmes do Gênero:</h1>
            <div className="flex flex-wrap justify-center">
                {genero.length > 0 ? (
                    genero.map((filme) => (
                        <MovieCard key={filme.id}{...filme} />
                    ))
                ) : (
                    <p>Carregando filmes...</p>
                )}
            </div>
        </>
    );
}
