import FavoriteButton from './FavoriteButton';
import { useGetAccountQuery } from '../app/moviesApiSlice';
import MovieDetail from './MovieDetails';
import { useParams, Link } from 'react-router-dom'

function MovieCard(props) {
    let movie = props.movie
    const { movie_id, title, picture_url } = useParams()
    const { data: account } = useGetAccountQuery()
    let movieID = "#" + movie.movie_id
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <img className="card-img-top" src={movie.picture_url} alt="picture_url"/>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={movieID}>Details</button>
                <MovieDetail movie_id={movie.movie_id} />
                <div className="col-4 text-end">
                    { account ? <FavoriteButton movie_id={movie.movie_id} title={movie.title} picture_url={movie.picture_url}/> : <Link to="/login" className='btn btn-outline-primary'>Favorite</Link>}
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
