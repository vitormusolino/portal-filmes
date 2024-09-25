import { useState } from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"

export default function MovieListPage(){

    const [search, setSearch] = useState('')
    const[listaFilmes, setListaFilmes] = useState(movies)

    const handleSearch= (e) => {
        setSearch(e.target.value)
            
    }


    return(
        <>
        <h2 className="">Veja o catálogo completo dos filmes</h2>

        <input 
        className="text-black"
        type="text" 
        name="search"
        id="search"
        placeholder="O que procura caro amigo?"
        value={search}
        onChange={handleSearch}
        />

        <div className="flex">
            {
            listaFilmes
                .filter( filme => (filme.titulo).includes(search))
                .map(filme => (
                <MovieCard key={filme.id}{...filme}/>
            ))
            }
        </div>
        </>
    )

}