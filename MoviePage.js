import Banner from "./Banner";
import MovieListWrapper from "./MovieListWrapper";


const MoviePage = () =>{

    return(
        <div>
        <Banner title={"dont breathe 2"}  description={"There is some textThere is some textThere is some textThere is some textThere is some text"} imageUrl={"'https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Polar-new-banner.jpg?ssl=1'"} />
        <MovieListWrapper />
        </div>
    )

}

export default MoviePage;