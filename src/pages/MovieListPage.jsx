import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"
import 'ldrs/ring'
import { jellyTriangle } from 'ldrs'
jellyTriangle.register()

export default function MovieListPage(){

    const [search, setSearch] = useState('')
    const [filmes,setFilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect( () => {
        setIsLoading(true)
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
        .then( results => results.json())
        .then( data => setFilmes(data.results))
        .catch(erro => console.log(erro))
        .finally(() => setIsLoading(false))
    },[])
    

    const handleSearch= (e) => {
        setSearch(e.target.value)
    }

    const filmesFiltrados = filmes.filter(filme=> filme.title.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
        <div className="flex flex-col items-center">
            <h2 className="mt-8 mb-5 font-bold text-2xl">Veja o catálogo completo dos filmes</h2>

            <input 
            className="text-black p-2 rounded-xl mb-10 w-80"
            type="text" 
            name="search"
            id="search"
            placeholder="O que procura caro amigo?"
            value={search}
            onChange={handleSearch}
            />
        </div>
            <div className="flex flex-wrap justify-center p-5">
                {
                    isLoading ?
                    <l-jelly-triangle size="30" speed="1.75" color="white" ></l-jelly-triangle>:
                    filmesFiltrados.length > 0 ?

                        filmesFiltrados
                            .map(filme => (
                                <MovieCard key={filme.id}{...filme}/>
                        ))

                    :
                    <p>Filme não encontrado</p>
                }
            </div>
        </>
    )

}