import { useState } from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"

export default function MovieListPage(){

    const [search, setSearch] = useState('')
    const[listaFilmes, setListaFilmes] = useState(movies)

    const handleSearch= (e) => {
        setSearch(e.target.value)
    }

    const filmesFiltrados = movies.filter(filme=> filme.titulo.toLowerCase().includes(search.toLowerCase()))

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