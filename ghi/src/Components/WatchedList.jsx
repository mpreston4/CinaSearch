import { useGetFavoritesQuery } from "../app/moviesApiSlice";
import MovieCardForFavorites from "./MovieCardForFavorites";

function WatchedList() {
    const { data, isLoading } = useGetFavoritesQuery();

    if (isLoading) return <div>Loading...</div>

    const columns = [[], [], []];
    let i = 0;
    for (let movie of data.favorites) {
        if (movie.has_watched === true) {
            columns[i].push(movie);
            i += 1;
        }
        if (i === 3) {
            i = 0;
        }
    }

    return (
        <div className="d-flex justify-content-center row mt-3" data-bs-theme="dark">
            <h1 className="mb-5 text-center text-white">Your Finished Movies!</h1>
            {columns.map(column => {
                return (
                    <div key={columns.indexOf(column)} className="col-3">
                        {column.map(movie => {
                            return (
                                <MovieCardForFavorites key={movie.movie_id} movie={movie} />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default WatchedList;
