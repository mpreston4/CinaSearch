import { useGetAllMoviesQuery } from "../app/moviesApiSlice";
import { useLocation } from "react-router-dom";

const MoviesList = () => {
    const location = useLocation();
    let param = location.state
    console.log(param)
    const { data, isLoading } = useGetAllMoviesQuery(param);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
    <>
        <div className="row mt-3">
            <h1 className='mb-3'>Movies</h1>
            <table>
                <tbody>
                    {data.movies.map( movie  => {
                        return (
                            <tr key={movie.movie_id}>
                                <td>{movie.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
    )
}

export default MoviesList
