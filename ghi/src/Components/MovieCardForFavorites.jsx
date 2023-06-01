import HasWatchedButton from "./HasWatchedButton";
import { Link, useParams } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { useGetAccountQuery } from '../app/moviesApiSlice';
import MovieDetail from './MovieDetails';

function MovieCardForFavorites(props) {
    let movie = props.movie
    const { data: account } = useGetAccountQuery()
    const { movie_id, title, picture_url, account_email, has_watched } = useParams()
    let movieID = "#" + movie.movie_id

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <img className="card-img-top" src={movie.picture_url} alt="picture_url"/>
                <div className="card-footer">
                    <div className="btn-grp" role="group" aria-label="Button group">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={movieID}>Details</button>
                        <MovieDetail movie_id={movie.movie_id} />
                        { account ? <FavoriteButton movie_id={movie.movie_id} title={movie.title} picture_url={movie.picture_url}/> : <Link className="btn btn-primary" to="/login">Favorite</Link>}
                    </div>
                </div>
                <div className="card-footer">
                    <HasWatchedButton movie_id={movie.movie_id} title={movie.title} picture_url={movie.picture_url} account_email={movie.account_email} has_watched={movie.has_watched}/>
                </div>
            </div>
        </div>
    )
}

export default MovieCardForFavorites;
