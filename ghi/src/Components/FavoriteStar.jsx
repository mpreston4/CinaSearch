import { useGetFavoritesQuery, useDeleteFavoriteMutation, useCreateFavoriteMutation } from "../app/moviesApiSlice";

function FavoriteStar(props) {
    const { data, isLoading } = useGetFavoritesQuery();
    const [deleteFavorite] = useDeleteFavoriteMutation();
    const [createFavorite] = useCreateFavoriteMutation();

    if (isLoading) {
        return <div>Loading...</div>
    }

    let movie = props.movie;
    let email = props.email;
    // eslint-disable-next-line
    let favorite = data.favorites.find(m => {
        if (m.movie_id === movie.movie_id && email === m.account_email) {
            return m
        }
    });

    if (favorite) {
        return (
            <button onClick={() => deleteFavorite(movie.movie_id)} type='btn' className='btn btn-dark text-warning p-1 fs-5' id='favorite' >&#x02605;</button>
        );
    } else {
        return (
            <button onClick={() => createFavorite(movie)} type='btn' className='btn btn-dark text-warning p-1 fs-5' id='favorite' >&#x02606;</button>
        );
    }
}

export default FavoriteStar;
