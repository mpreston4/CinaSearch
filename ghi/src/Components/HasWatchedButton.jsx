import { useUpdateFavoriteMutation, } from "../app/moviesApiSlice";

const HasWatchedButton = (props) => {

    const [updateFavorite] = useUpdateFavoriteMutation();
    let has_watched = props.has_watched
    let movie_id = props.movie_id


    return (
        <div>
            <button data-bs-dismiss="modal" className="btn btn-primary" onClick={() => updateFavorite(movie_id)}>
               {has_watched ? "Haven't Finished??" : "Finished Movie?"}
            </button>
        </div>
    )
}


export default HasWatchedButton;
