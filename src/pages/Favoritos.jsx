import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);
  const [assistidos,setAssistidos] = useState([]);

  useEffect(() => {
    const filmesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFilmes(filmesFavoritos);
  }, []);

  useEffect(() => {
    const filmesAssistidos = JSON.parse(localStorage.getItem('assistidos')) || []
    setAssistidos(filmesAssistidos)
  })

  return (
    <>
    <div className="py-10 px-28">
        <h2 className="text-2xl font-bold">Filmes para assistir</h2>
        <div className="flex justify-start mb-10">
          {filmes.length > 0 ?
          filmes.map((filme) => (
            <MovieCard key={filme.id}{...filme}/>
          )):
          <p className="mt-10">Você ainda não tem filmes salvos.</p>
          }
        </div>

        <h2 className="text-2xl font-bold">Filmes assistidos</h2>
        <div className="flex justify-start">
          {assistidos.length > 0 ?
          assistidos.map((filme) => (
            <MovieCard key={filme.id}{...filme}/>
          )):
          <p className="mt-10">Você ainda não tem filmes assistidos.</p>
          }
        </div>
      </div>
    </>
  );
}
