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
        <div className="row mt-3">
            <button
                className="btn btn-outline-primary"
                onClick={() => updateFavorite(movie_id)}
            >
                {data.has_watched ? "Watched" : "Not watched"}
            </button>
        </div>
    )
}

export default HasWatchedButton;
