import MovieDetail from './MovieDetails';
import { useGetFavoritesQuery, useDeleteFavoriteMutation, useCreateFavoriteMutation, useGetAccountQuery } from "../app/moviesApiSlice";
function MovieCard(props) {
    const { data, isLoading } = useGetFavoritesQuery()
    const { data : account, isFetching } = useGetAccountQuery()
    const [deleteFavorite] = useDeleteFavoriteMutation()
    const [createFavorite] = useCreateFavoriteMutation()
    if (isFetching) {
        return <div>Loading...</div>
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    let movie = props.movie
    let favorite = false
    if (account) {
        favorite = data.favorites.find(m =>  {
        if (m.movie_id === movie.movie_id && account.email === m.account_email) {
            return m
        }
    })
    }

    let movieID = "#" + movie.movie_id
    let movie_id = movie.movie_id
    let title = movie.title
    let picture_url = movie.picture_url
    return (
        <div className="card mb-3">
            <div className="card-body p-0 d-flex justify-content-center">
                <button type='btn' className='btn p-0'>
                    <img className="card-img-top" src={picture_url} alt="picture_url" data-bs-toggle="modal" data-bs-target={movieID}/>
                </button>
                <div className='card-img-overlay' style={{height: "60px", width: "40px"}}>
                    { account ?
                    favorite ?
                    <button onClick={() => deleteFavorite(movie_id)} type='btn' className='btn btn-dark text-warning p-1 fs-5' id='favorite' >&#x02605;</button> :
                    <button onClick={() => createFavorite({movie_id, title, picture_url})} type='btn' className='btn btn-dark text-warning p-1 fs-5' id='favorite' >&#x02606;</button> :
                    ""
                    }
                </div>
                <MovieDetail movie_id={movie_id} />
            </div>
        </div>
    )
}

export default MovieCard;

    // <div className="card mb-3">
    //     <div className="card-body p-0 d-flex justify-content-center">
    //         <button type='btn' className='btn p-0'>
    //             <img className="card-img-top" src={picture_url} alt="picture_url" data-bs-toggle="modal" data-bs-target={movieID}/>
    //         </button>
    //         <div className='card-img-overlay' style={{height: "60px", width: "40px"}}>
    //             { account ?
    //             favorite ?
    //             <button onClick={() => deleteFavorite(movie_id)} type='btn' className='btn btn-dark text-warning p-1 fs-5' id='favorite' >&#x02605;</button> :
    //             <button onClick={() => createFavorite({movie_id, title, picture_url})} type='btn' className='btn btn-dark text-warning p-1 fs-5' id='favorite' >&#x02606;</button> :
    //             ""
    //             }
    //         </div>
    //         <MovieDetail movie_id={movie_id} />
    //     </div>
    // </div>