import { useGetFavoritesQuery, useUpdateFavoriteMutation, useGetAccountQuery } from "../app/moviesApiSlice";

const HasWatchedButton = ({movie_id}) => {
    const { data, isLoading } = useGetFavoritesQuery();
    const { data : account } = useGetAccountQuery();
    const [updateFavorite] = useUpdateFavoriteMutation();
    const favorite = data.favorites.find(m =>  {
        if (m.movie_id === movie_id && account.email === m.account_email) {
            return m
        }
    })

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
                onClick={() => updateFavorite({movie_id})}
            >
               {data.has_watched ? "No" : "Yes"}
            </button>
        </div>
    )
}

export default HasWatchedButton;
