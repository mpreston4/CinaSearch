import { useUpdateFavoriteMutation, useGetFavoritesQuery } from "../app/moviesApiSlice";

function HasWatchedButton(props) {
    const { data, isLoading } = useGetFavoritesQuery();
    const [updateFavorite] = useUpdateFavoriteMutation();

    if (isLoading) {
        return <div>Loading...</div>
    }

    let favorite = data.favorites.find(m => {
        if (m.movie_id === props.movie_id && props.email === m.account_email) {
            return m
        }
    });

    if (favorite) {
        return (
            <button data-bs-dismiss="modal" className="btn btn-primary" onClick={() => updateFavorite(props.movie_id)}>
                {props.has_watched ? "Haven't Finished??" : "Finished Movie?"}
            </button>
        );
    } else {
        return (
            ""
        );
    }
}

export default HasWatchedButton;
