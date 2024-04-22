import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavouriteContext } from '../context/favourite';

const MovieCard = ({ movie }) => {
    // console.log(movie)

    const {favourites , setFavourites} = useContext(FavouriteContext);
    const handleFavouriteClick = ()=>{
        setFavourites((previousFavMovies) => [...previousFavMovies , movie]);
    }
    return (

        <div className='movie-card' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.poster_path}")` }}>

            <h3>
                <Link to={`/detail/${movie.id}`} >
                    {movie.title}
                </Link>
            </h3>
            <button onClick ={handleFavouriteClick}>Add To Favourites</button>

        </div>

    )
}

export default MovieCard;