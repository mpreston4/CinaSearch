import HasWatchedButton from "./HasWatchedButton";
import { Link, useParams } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { useGetAccountQuery } from '../app/moviesApiSlice';

function MovieCardForFavorites(props) {
    let movie = props.movie
    const { data: account } = useGetAccountQuery()
    const { movie_id, title, picture_url, account_email, has_watched } = useParams()
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <img className="card-img-top" src={movie.picture_url} alt="picture_url"/>
                <div className="col-4 text-end">
                    <HasWatchedButton movie_id={movie.movie_id} title={movie.title} picture_url={movie.picture_url} account_email={movie.account_email} has_watched={movie.has_watched}/>
                </div>
                <div className="col-4 text-end">
                    { account ? <FavoriteButton movie_id={movie.movie_id} title={movie.title} picture_url={movie.picture_url}/> : <Link to="/login" className='btn btn-outline-primary'>Favorite</Link>}
                </div>
            </div>
        </div>
    )
}

export default MovieCardForFavorites;
