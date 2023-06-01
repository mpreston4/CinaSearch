import MovieDetail from './MovieDetails';


function MovieCard(props) {
    let movie = props.movie
    let movieID = "#" + movie.movie_id
    return (
        <div className="card mb-3">
            <div className="card-body">
                {/* <img className="card-img-top" src={movie.picture_url} alt="picture_url"/> */}
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={movieID}>
                    <img className="card-img-top" src={movie.picture_url} alt="picture_url"/>
                </button>
                <MovieDetail movie_id={movie.movie_id} />
            </div>
        </div>
    )
}

export default MovieCard;
