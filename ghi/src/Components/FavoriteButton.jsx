import { useGetFavoritesQuery, useDeleteFavoriteMutation, useCreateFavoriteMutation, useGetAccountQuery } from "../app/moviesApiSlice";

function FavoriteButton({ movie_id, title, picture_url }) {
    const { data, isLoading } = useGetFavoritesQuery();
    const { data: account, isFetching } = useGetAccountQuery();
    const [deleteFavorite] = useDeleteFavoriteMutation();
    const [createFavorite] = useCreateFavoriteMutation();

    if (isFetching) return <div>Loading...</div>
    if (isLoading) return <div>Loading...</div>

    const favorite = data.favorites.find(m => {
        if (m.movie_id === movie_id && account.email === m.account_email) {
            return m
        }
    });

    if (!favorite) {
        return (
            <button
                className="btn btn-success"
                onClick={() => createFavorite({ movie_id, title, picture_url })}
            >
                Favorite
            </button>
        );
    }
    return (
        <button
            className="btn btn-danger"
            onClick={() => deleteFavorite(favorite.movie_id)}
            data-bs-dismiss="modal"
        >
            Unfavorite
        </button>
    );
}

export default FavoriteButton;
