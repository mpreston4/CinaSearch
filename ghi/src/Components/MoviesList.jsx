import MovieCard from "./MovieCard";
import { useGetAllMoviesQuery } from "../app/moviesApiSlice";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const MoviesList = () => {
    const location = useLocation();
    let param = location.state
    console.log(param)
    const { data, isLoading } = useGetAllMoviesQuery(param);
    if (isLoading) {
        return <p>Loading...</p>
    }
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
            <div className="d-flex justify-content-center row mt-3">
                <h1 className='mb-3 text-center'>Search Results For: {search[0]}</h1>
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
export default MoviesList

// const Movies = () => {
//     return (
//         <div className="d-flex justify-content-center row mt-3">
//             <h1 className='mb-3'>Movies</h1>
//             {columns.map( column => {
//                 return (
//                 <div className="col-3">
//                 {column.map( movie  => {
//                     return (
//                         <MovieCard key={movie.movie_id} movie={movie} />
//                     )
//                 })}
//                 </div>
//                 )
//             })}
//         </div>
//     )
// }
