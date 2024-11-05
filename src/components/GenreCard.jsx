import { Link } from "react-router-dom";

export default function GenreCard({ name, id }) {
    return (
        <div className="flex justify-center items-center bg-purple-700 px-20 py-10 max-w-52 min-w-52 max-h-28 min-h-28 rounded-md">
            <Link to={`/genre/${id}`}>
                <h1>{name}</h1>
            </Link>
        </div>
    );
}
