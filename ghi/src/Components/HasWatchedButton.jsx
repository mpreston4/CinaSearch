import { useUpdateFavoriteMutation, } from "../app/moviesApiSlice";

const HasWatchedButton = (props) => {

    const [updateFavorite] = useUpdateFavoriteMutation();
    let has_watched = props.has_watched
    let movie_id = props.movie_id


    return (
        <div>
            <p>Have you seen this movie?</p>
            <button className="btn btn-primary" onClick={() => updateFavorite(movie_id)}>
               {has_watched ? "No" : "Yes"}
            </button>
        </div>
    )
}


export default HasWatchedButton;
