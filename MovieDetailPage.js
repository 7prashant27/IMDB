import { useParams } from "react-router-dom";
import Banner from "./Banner"
import { useEffect, useState } from "react";

const MovieDetailPage = () => {

    const [movieDetail, setMovieDetail] = useState();
    const { movieId } = useParams();


    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=81461d61049039d1819e934c62b56bf8&language=en-US&page=1')
            .then(res => res.json())
            .then((data) => {
                // console.log(data)
                return data;
            })
            .then ( data => data.results.find((movie) => movie.id == movieId))
                .then( (movie) => {
                    // console.log(movie)
                    return setMovieDetail(movie)})
         },[])

    // const params  = useParams();  
    // console.log(params); -> this will give output -> {movieId: '980489'}movieId: "980489"[[Prototype]]: Object

console.log(movieDetail)

    return (
        <div>
            <h1>Movie details</h1>
            <Banner title={movieDetail?.title} description={movieDetail?.overview} imageUrl={`https://image.tmdb.org/t/p/original${movieDetail?.poster_path}`} />
        </div>
    )
}

export default MovieDetailPage;