import { Link } from "react-router-dom"

export default function MovieCard({title,id,poster_path}) {
    return(
        <>
            <div>
                <h2>{title}</h2>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`}/>
                <Link to={`movies/${id}`}>Mais detalhes</Link>
            </div>
        </>
    )

}   