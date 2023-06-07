import { useDeleteFavoriteMutation } from '../app/moviesApiSlice';
import MovieDetail from './MovieDetails';

function MovieCardForFavorites(props) {
    let movie = props.movie
    let movieID = "#" + movie.movie_id
    let has_watched = movie.has_watched
    const [deleteFavorite] = useDeleteFavoriteMutation()

    return (

        <div className="card mb-3 shadow">
            <div className="card-body p-0 d-flex justify-content-center">
                <button type='btn' className='btn p-0'>
                    <img className="card-img-top" src={movie.picture_url} alt="picture_url" data-bs-toggle="modal" data-bs-target={movieID}/>
                </button>
                <div className='card-img-overlay' style={{height: "60px", width: "40px"}}>
                    <button onClick={() => deleteFavorite(movie.movie_id)} type='btn' className='btn btn-dark text-warning p-1 fs-5' id='favorite' >&#x02605;</button>
                </div>
                <MovieDetail movie_id={movie.movie_id} has_watched={has_watched}/>
            </div>
        </div>
    )
}

export default MovieCardForFavorites;
