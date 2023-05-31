import { Link, useParams } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { useGetAccountQuery } from '../app/moviesApiSlice';

function MovieCard(props) {
    let movie = props.movie
    const { movie_id, title, picture_url } = useParams()
    const { data: account } = useGetAccountQuery()
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <img className="card-img-top" src={movie.picture_url} alt="picture_url"/>
                <Link to={`/movies/${movie.movie_id}`}>Details</Link>
                <div className="col-4 text-end">
                    { account ? <FavoriteButton movie_id={movie.movie_id} title={movie.title} picture_url={movie.picture_url}/> : <Link to="/login" className='btn btn-outline-primary'>Favorite</Link>}
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
