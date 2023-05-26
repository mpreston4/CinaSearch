import MovieCard from "./MovieCard";

function MovieSlide(props) {
    return(
        <div className={props.class}>
            <div className="d-flex justify-content-center row mt-3">
                {props.movies.map(movie => {
                    return(
                        <div key={movie.movie_id} className="col-3">
                            <MovieCard key={movie.movie_id} movie={movie} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MovieSlide;
