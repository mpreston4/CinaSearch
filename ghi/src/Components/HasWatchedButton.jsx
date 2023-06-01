import { useGetFavoritesQuery, useUpdateFavoriteMutation } from "../app/moviesApiSlice";

const HasWatchedButton = ({movie_id}) => {
    const { data, isLoading } = useGetFavoritesQuery();
    const [updateFavorite] = useUpdateFavoriteMutation()
    const favorite = data.find(m => m.movie_id === movie_id)

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <p>Watched?</p>
            <button
                className="btn btn-primary"
                onClick={() => updateFavorite(movie_id)}
            >
               {data.has_watched ? "Yes" : "No"}
            </button>
        </div>
    )
}

export default HasWatchedButton;
