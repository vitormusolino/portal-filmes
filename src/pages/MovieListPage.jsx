import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"

export default function MovieListPage(){

    const [search, setSearch] = useState('')
    const [filmes,setFilmes] = useState([])
    

    useEffect( () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
        .then( results => results.json())
        .then( data => setFilmes(data.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("Cabo"))
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
            className="text-black w-72 p-2 rounded-xl mb-10"
            type="text" 
            name="search"
            id="search"
            placeholder="O que procura caro amigo?"
            value={search}
            onChange={handleSearch}
            />
        </div>
            <div className="flex flex-wrap justify-center">
                {
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