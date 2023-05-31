import { useGetFavoritesQuery } from "../app/moviesApiSlice";
import MovieCardForFavorites from "./MovieCardForFavorites";

const Favorites = () => {
    const { data, isLoading } = useGetFavoritesQuery();

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div className="row mt-3">
            {data?.map(movie => <MovieCardForFavorites key={movie.movie_id} movie={movie} />)}
        </div>
    )
}

export default Favorites;
