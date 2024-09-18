import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from '../data/movies.json'

export default function Home(){
    return(
        <>
            <CardContainer titulo="Filmes Antigos">
                {movies
                .filter(movie => movie.ano_lancamento < 2000)
                .map(movie=>(
                    <MovieCard key={movie.id} {...movie}/>
                ))}
            </CardContainer>

            <CardContainer titulo="Melhores Filmes">
                {movies
                .filter(movie => movie.avaliacao >= 9)
                .map(movie=>(
                    <MovieCard key={movie.id} {...movie}/>
                ))}
            </CardContainer>
        </>
    )
}