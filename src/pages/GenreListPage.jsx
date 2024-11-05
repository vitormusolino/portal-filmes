import { useEffect, useState } from 'react';
import GenreCard from '../components/GenreCard'; 

export default function GenreListPage() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`
    )
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres); 
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1 className='font-bold text-2xl text-center mt-20'>Escolha o seu gênero preferido!</h1>

      <div className='flex flex-wrap justify-around items-center my-40 px-20 gap-12'>
        {genres.map((genre) => ( 
          <GenreCard key={genre.id} name={genre.name} id={genre.id} /> 
        ))}
      </div>
    </>
  );
}
