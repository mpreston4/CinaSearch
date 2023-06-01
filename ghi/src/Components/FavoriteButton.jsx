import { useGetFavoritesQuery, useDeleteFavoriteMutation, useCreateFavoriteMutation } from "../app/moviesApiSlice";

const FavoriteButton = ({movie_id, title, picture_url}) => {
    const { data: favorites, isLoading } = useGetFavoritesQuery()
    const [deleteFavorite] = useDeleteFavoriteMutation()
    const [createFavorite] = useCreateFavoriteMutation()
    const favorite = favorites.find(m => m.movie_id === movie_id)

    if (isLoading) return <div>Loading...</div>
    if (!favorite) {
        return (
            <button
                className="btn btn-success"
                onClick={() => createFavorite({movie_id, title, picture_url})}
            >
                Favorite
            </button>
        )
    }
    return (
        <button
            className="btn btn-danger"
            onClick={() => deleteFavorite(favorite.movie_id)}
        >
            Unfavorite
        </button>
    )
}

export default FavoriteButton;
