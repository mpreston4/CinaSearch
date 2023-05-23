import { useGetAllMoviesQuery } from "./app/moviesApiSlice";

const MoviesList = () => {
    const { data, isLoading } = useGetAllMoviesQuery();
    if (isLoading)
    return <p>Loading...</p>

    return (
    <>
        <div className="row mt-3">
            <h1 className='mb-3'>Movies</h1>
            {data.movies.map( movie  => {
                return (
                    <tr key={movie.id}>
                        <td>{movie.title}</td>
                    </tr>
                )
            })}
        </div>

    </>
    )

}

export default MoviesList
