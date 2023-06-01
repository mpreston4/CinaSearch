import { useGetFavoritesQuery } from "../app/moviesApiSlice";
import MovieCardForFavorites from "./MovieCardForFavorites";

const Favorites = () => {
    const { data, isLoading } = useGetFavoritesQuery();

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    console.log(data)
    const columns = [[], [], []]
    let i = 0;
    for (let movie of data) {
        columns[i].push(movie)
        i += 1;
        if (i === 3) {
            i = 0;
        }
    }
    return (
        <div className="d-flex justify-content-center row mt-3">
            <h1 className="mb-3 text-center">Your List of Favorites!</h1>
                    {columns.map( column => {
                    return (
                    <div key={column[0].movie_id} className="col-3">
                    {column.map( movie  => {
                        return (
                            <MovieCardForFavorites key={movie.movie_id} movie={movie} />
                        )
                    })}
                    </div>
                    )
                })}
        </div>
    )
}

export default Favorites;
