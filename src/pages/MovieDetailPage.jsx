import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});

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
            <div className="flex py-5 gap-10">
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
                <p>No genres available</p>
              )}
            </div>

            <p className="font-bold text-sm">{movie.overview}</p>
            <div className="flex items-center gap-10 mt-7">
              <p className="">⭐{movie.vote_average}</p>
              <p>{movie.release_date}</p>
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
          <p>No video available</p>
        )}
      </div>
    </>
  );
}
