import { useState, useEffect, useCallback, useMemo, useContext } from "react"
import { FavouriteContext } from "../context/favourite";

let genreids = {

    28: "Action",
    21: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
    12: "Sports"
}
const Favourites = () => {

    // const [genres, setGenres] = useState([]); --> see the lines  above useeffect function to understand..
   
    const {favourites} = useContext(FavouriteContext); 

    const [favouritesList, setFavouritesList] = useState(favourites);

    const [selectedGenreId, setSelectedGenreId] = useState();

    const [searchedFavourites, setSearchedFavourites] = useState(favourites); // -> we created this state because we are using favouriteList
    // state to render data tothe end user so for modifying / altering the data we created this state.

    // console.log(favouritesList);


    /*

    The below code is old one. We can optimise the below code in a different and simpler way using useMemo() hook. 
    By using that we can also skip the genres,setgenres use state.

    useEffect(() => {
        // in the below line we are doing following things:
        //1. we are creating a "genreIds" array which contains all the genre ids of fav movies.
        //2. Now in genreIds arr, we will also be having duplicate elements. So in order to remove those we are wrapping our map fn with new Set method.
        //3. and at last we are again converting our set back to an array.

        const genreIds = Array.from(new Set(favourites.map((favourite) => favourite.genre_ids[0])));
        setGenres(genreIds)
    }, [favourites]);

    */

    //The below line will help in getting the genres id in a much simpler way using useMemo hook. 

    const genres = useMemo(() => Array.from(new Set(favourites.map((favourite) => favourite.genre_ids[0]))), [favourites]) 


    /*  This commented section is the old code -> we will use useCallback hook to optimise the repetitive 
        function declaration which was happening in the below code. 

    const handleSearch = (e) => {

        const searchText = e.target.value;

        setFavouritesList(() => {
            const filteredFavList = searchedFavourites.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()));
            return filteredFavList;
        })
        // console.log('after using search', favouritesList)

    }

    const filterFavourites = (genreId) => {

        // console.log(genreId)
        setSearchedFavourites(() => {
            const filteredFavList = genreId ? favourites.filter(movie => movie.genre_ids[0] == genreId) : favourites;

            setFavouritesList(filteredFavList); // we are just updating our state which will be shown to d user
            return filteredFavList;
        })
        console.log('after using filterfav',favouritesList )
        console.log('genre Id ' , genreId)
    }

    const handleSort = (sortType) => {

        setFavouritesList(() => {

            const sortedList = [...searchedFavourites].sort((a, b) => {
                // console.log('A and B',a,b)
                return sortType ? a.popularity - b.popularity : b.popularity - a.popularity;
            })

            return sortedList;
        })
    }

    */

    const handleSearch = useCallback((e) => {

        const searchText = e.target.value;

        setFavouritesList(() => {
            const filteredFavList = searchedFavourites.filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()));
            return filteredFavList;
        })
        // console.log('after using search', favouritesList)

    }, [searchedFavourites]) // array me waisa val ko pass kro jo ki useCallback ke aandar ke funtion me nai h. mtlb ki foregin value jo ki usecallback fn ke aandar use ho rha ho.
                            // jyse ki searchedfavourites aysa val h jo bahar define hua h and idhar use ho rha h. isse ye hoga ki callback fn tabhi run karega jb searchedfav change hoga.

    const filterFavourites = useCallback((genreId) => {

        // console.log(genreId)
        setSearchedFavourites(() => {
            const filteredFavList = genreId ? favourites.filter(movie => movie.genre_ids[0] == genreId) : favourites;

            setFavouritesList(filteredFavList); // we are just updating our state which will be shown to d user
            return filteredFavList;
        })
        console.log('after using filterfav',favouritesList )
        console.log('genre Id ' , genreId)
    },[favourites]);



    const handleSort = useCallback((sortType) => {

        setFavouritesList(() => {

            const sortedList = [...searchedFavourites].sort((a, b) => {
                // console.log('A and B',a,b)
                return sortType ? a.popularity - b.popularity : b.popularity - a.popularity;
            })

            return sortedList;
        })
        
    },[searchedFavourites]);

    return (

        <div className='favourite-page'>
            <h1>Favourites</h1>
            <div className='wrapper'>


                <div className='left-section'>

                    <div className='genres-wrapper'>

                        <ul>
                            <li className = {!selectedGenreId ? 'selected' : ''} onClick={() => { setSelectedGenreId(); filterFavourites(); }} >All Genres</li>
                            {genres?.map(genreId => {
                                // console.log('genres', genres, "genreID", genreId)
                                return (
                                    <li
                                        className={selectedGenreId === genreId ? 'selected' : ''}
                                        onClick={() => {setSelectedGenreId(genreId);
                                                        filterFavourites(genreId)
                                        }
                                        } >
                                        {genreids[genreId]}
                                    </li>
                                )

                            })}
                        </ul>
                    </div>
                </div>
                <div className='right-section'>
                    <input style={{ width: "50%", height: "40px" }} type="search" onChange={handleSearch} placeholder='Enter Movie Name' />
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th ><span onClick={() => handleSort(true)}>^</span> Popularity <span onClick={() => handleSort(false)}>v</span></th>
                                <th>Ratings</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                favouritesList?.map(favourite => {
                                    return (
                                        <tr>
                                            <td><img width="60px" src={`https://image.tmdb.org/t/p/original${favourite.poster_path}`} /></td>
                                            <td>{favourite.title}</td>
                                            <td>{genreids[favourite.genre_ids[0]]}</td>
                                            <td>{favourite.popularity}</td>
                                            <td>{favourite.vote_average}</td>
                                            <td><button>Delete </button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Favourites;