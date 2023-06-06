import MovieDetail from './MovieDetails';
import FavoriteStar from './FavoriteStar';
import { useGetAccountQuery } from "../app/moviesApiSlice";
function MovieCard(props) {
    const { data : account, isLoading } = useGetAccountQuery()

    if (isLoading) {
        return <div>Loading...</div>
    }

    let movie = props.movie
    let movieID = "#" + movie.movie_id

    return (
        <div className="card mb-3 shadow">
            <div className="card-body p-0 d-flex justify-content-center">
                <button type='btn' className='btn p-0'>
                    <img className="card-img-top" src={movie.picture_url} alt="picture_url" data-bs-toggle="modal" data-bs-target={movieID}/>
                </button>
                <div className='card-img-overlay' style={{height: "60px", width: "40px"}}>
                    { account ? <FavoriteStar movie={movie} email={account.email}/>:
                    ""
                    }
                </div>
                <MovieDetail movie_id={movie.movie_id} />
            </div>
        </div>
    )
}

export default MovieCard;
