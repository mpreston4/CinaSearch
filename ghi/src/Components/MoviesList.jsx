import MovieCard from "./MovieCard";
import { useGetAllMoviesQuery } from "../app/moviesApiSlice";
import { useLocation } from "react-router-dom";

const MoviesList = () => {
    const location = useLocation();

    let param = location.state
    const { data, isLoading } = useGetAllMoviesQuery(param);
    if (isLoading) {
        return <p>Loading...</p>
    }

    if (data.movies.length === 0) {

        let search = Object.values(param)
        return (
            <>
                <div className="d-flex justify-content-center row mt-3" data-bs-theme="dark">
                    <h1 className='mb-5 text-center text-white'>Sorry, no results found for: {search[0]}</h1>
                    <h2 className='mb-5 text-center text-white'>Please try searching by a different title</h2>
                    <button className="btn btn-primary" style={{width: "200px"}} onClick={() => window.history.back()}>Go Back to previous page?</button>
                </div>
            </>
        )
    } else {
        const columns = [[], [], []]
        let i = 0;
        for (let movie of data.movies) {
            columns[i].push(movie)
            i += 1;
            if (i === 3) {
                i = 0;
            }
        }

        let search = Object.values(param)
        return (
            <>
                <div className="d-flex justify-content-center row mt-3" data-bs-theme="dark">
                    <h1 className='mb-5 text-center text-white'>Search Results For: {search[0]}</h1>
                    {columns.map( column => {
                        return (
                        <div key={column[0].movie_id} className="col-3">
                        {column.map( movie  => {
                            return (
                                <MovieCard key={movie.movie_id} movie={movie} />
                            )
                        })}
                        </div>
                        )
                    })}
                </div>
            </>
        )
    }
}
export default MoviesList
