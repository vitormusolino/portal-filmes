import { Link } from "react-router-dom"

export default function MovieCard({title,id,poster_path}) {
    return(
        <>
            <div className="flex flex-col p-5 items-center">
                <img className="max-w-48 rounded" src={`https://image.tmdb.org/t/p/w200${poster_path}`}/>
                <div className="flex flex-col items-center">
                    <h2 className="font-bold max-w-44 text-wrap ">{title}</h2>
                    <Link to={`movies/${id}`} className="mt-2">Mais detalhes</Link>
                </div>
            </div>
        </>
    )

}   