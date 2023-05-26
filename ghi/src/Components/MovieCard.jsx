import { Link } from 'react-router-dom';

function MovieCard(props) {
    let movie = props.movie
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <img className="card-img-top" src={movie.picture_url} alt="picture_url"/>
                <Link to={`/movies/${movie.movie_id}`}>Details</Link>
            </div>
        </div>
    )
}

export default MovieCard;
