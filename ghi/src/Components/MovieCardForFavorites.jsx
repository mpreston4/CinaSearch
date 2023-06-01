import HasWatchedButton from "./HasWatchedButton";
import MovieDetail from './MovieDetails';

function MovieCardForFavorites(props) {
    let movie = props.movie
    let movieID = "#" + movie.movie_id

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="card-footer">
                    <div className="btn-grp" role="group" aria-label="Button group">
                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={movieID}>
                            <img className="card-img-top" src={movie.picture_url} alt="picture_url"/>
                        </button>
                        <MovieDetail movie_id={movie.movie_id} />
                    </div>
                </div>
                <div className="card-footer">
                    <HasWatchedButton movie_id={movie.movie_id} has_watched={movie.has_watched}/>
                </div>
            </div>
        </div>
    )
}

export default MovieCardForFavorites;
