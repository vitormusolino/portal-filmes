import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";




export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});
  const [elenco, setElenco] = useState([]);
  const filme = {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
  };

  const handleFavorito = ({ id, title, poster_path }) => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const isFavorite = favoritos.some((filme) => filme.id == id);

    if (isFavorite) {
      favoritos = favoritos.filter((filme) => filme.id != id);
    } else {
      favoritos.push({ id, title, poster_path });
      alert("Filme adicionado na sua lista!")
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  };

  const handleAssistidos = ({ id, title, poster_path }) => {
    let assistidos = JSON.parse(localStorage.getItem("assistidos")) || [];

    const isWatched = assistidos.some((filme) => filme.is == id);

    if (isWatched) {
      assistidos = assistidos.filter((filme) => filme.id != id);
    } else {
      assistidos.push({ id, title, poster_path });
      alert("Filme assistido adicionado!")
    }

    localStorage.setItem("assistidos", JSON.stringify(assistidos));
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br
        `
    )
      .then((response) => response.json())
      .then((data) => {
        setElenco(data.cast);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div
        className="relative flex flex-col h-[85vh] bg-no-repeat bg-cover bg-center items-center p-20"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movie.backdrop_path}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="z-10 flex items-start gap-20 px-40">
          <div className="">
            <img
              className="shadow-slate-950 shadow-lg rounded-lg min-w-72"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-5">{movie.title}</h1>
            <div className="flex pt-3 pb-5 gap-10">
              {movie.genres && movie.genres.length > 0 ? (
                movie.genres.map((genre) => (
                  <h2
                    className="border-2 py-2 px-3 rounded-lg border-purple-700 hover:text-purple-700 duration-500"
                    key={genre.id}
                  >
                    {genre.name}
                  </h2>
                ))
              ) : (
                <p>Sem gêneros</p>
              )}
            </div>

            <p className="font-bold text-sm">{movie.overview}</p>
            <div className="flex items-center gap-10 mt-7">
              <p className="">⭐ {movie.vote_average}</p>
              <p>📅  {movie.release_date}</p>
            </div>
            <div className="flex pt-5 pb-8 gap-10">
              <button
                onClick={() => handleFavorito(filme)}
                className="border-2 border-gray-100 p-3 rounded bg-purple-800
              hover:bg-transparent hover:border-purple-800 duration-500"
              >
                Sua lista
              </button>
              <button
                onClick={() => handleAssistidos(filme)}
                className="border-2 border-gray-100 p-3 rounded bg-purple-800
              hover:bg-transparent hover:border-purple-800 duration-500"
              >
                Assistidos
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-10">
        <h2 className="text-2xl py-5">Trailer</h2>
        {video.results && video.results.length > 0 ? (
          <iframe
            className="rounded-lg"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.results[0].key}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Sem trailer disponível</p>
        )}
      </div>
      <div className="text-center mt-10 mb-10">
        <h2 className="text-2xl">Elenco</h2>
        <div className="flex overflow-x-auto scroll-style gap-5 mt-10">
          {elenco.length > 0 ? (
              elenco
              .filter((ator) => ator.profile_path)
              .map((ator) => (
              <div key={ator.id} className="">
                {ator.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${ator.profile_path}`}
                    alt={ator.name}
                    className="max-w-24 rounded-xl min-w-34"
                  />
                )}
                <p className="text-white">{ator.name}</p>
              </div>
            ))
          ) : (
            <p>Sem elenco dispoível</p>
          )}
        </div>
      </div>
    </>
  );
}
