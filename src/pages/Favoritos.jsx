import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const filmesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFilmes(filmesFavoritos);
  }, []);

  return (
    <>
      {filmes.length > 0 ?
      filmes.map((filme) => (
        <MovieCard key={filme.id}{...filme}/>
      )):
      <p>Você ainda não tem filmes favoritos.</p>
      }
    </>
  );
}
