import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const MovieList = () => {

    const [movies, setMovies] = useState();


    const [moviePageStore , setMoviePageStore] = useState({});

   
    const fetchMovieData = (pageNumber = 1) => {

        const pageWiseMovie = moviePageStore[pageNumber]
        // if that page is already loaded then just reload the page
        if(pageWiseMovie) {
            setMovies(pageWiseMovie)
        }
        //if page doesnt exist in the moviepagestore object
        else{

            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=81461d61049039d1819e934c62b56bf8&language=en-US&page=${pageNumber}`)
                .then(res => res.json())
                .then(data => {
                    setMovies(data)
                    setMoviePageStore( (preVal) =>{
                        // console.log(data)
                        return {
                                ...preVal,
                                [pageNumber]: data
                        }
                    })
                })
                    

               
        }

    }
    console.log(movies)

    useEffect(() => {
        
        fetchMovieData();

    }, []);
    // console.log("movies.result",movies?.results) - gives an arr 
    // console.log("movies",movies) - gives an object

    return (
        <>
            <div className='movie-list'>
                {
                    movies?.results?.map((movie) => {
                        return (<MovieCard movie={movie}  />)
                    })
                }
            </div>
            {/* In the below code line number 41 and below //In summary, the code checks if movies?.total_pages exists
                 and is truthy. If it is, it renders the Pagination component with
                  the specified props. If movies?.total_pages is falsy or undefined,
                   the Pagination component won't be rendered. 
                   This is a common technique used in React to conditionally 
                   render components based on the presence or value of certain data. */}
            {
                movies?.total_pages && (

                    <Pagination fetchMovieData={fetchMovieData} totalPages={movies?.total_pages} />
                )
            }
        </>
    )
}

export default MovieList;
