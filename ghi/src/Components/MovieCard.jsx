import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MovieDetail from './MovieDetails';
import { useGetMovieQuery } from '../app/moviesApiSlice';

function MovieCard(props) {
    let movie = props.movie
    let movieID = "#" + movie.movie_id
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <img className="card-img-top" src={movie.picture_url} alt="picture_url"/>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={movieID}>Details</button>
                <MovieDetail movie_id={movie.movie_id} />
            </div>
        </div>
    )
}

export default MovieCard;
