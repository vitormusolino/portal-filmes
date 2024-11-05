import { Link } from "react-router-dom"

export default function MovieCard({id, poster_path}) {

    return (
        <>
            <div className="flex flex-col p-5 items-center text-center">
                <img className="max-w-36 rounded-xl min-w-40 min-h-60" src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
                <div className="flex flex-col items-center ">
                    <Link to={`/movies/${id}`} className="mt-4 p-3 border-2 border-purple-700 text-xs 
                    hover:scale-110 duration-500">Saiba mais</Link>
                    
                </div>
            </div>
        </>
    )

}   