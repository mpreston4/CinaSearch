import { useGetAllMoviesQuery } from "../app/moviesApiSlice";
import { useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";
import ErrorPageLogo from "../images/ErrorPageLogo.jpg";
import PrevNextButtons from "./Prev&NextButtons";

function MoviesList() {
    const location = useLocation();
    let param = location.state;
    const { data, isLoading } = useGetAllMoviesQuery(param);

    if (isLoading) {
        return (
            <div className="text-center">
                <div style={{ width: "400px", height: "400px" }} className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (data.movies.length === 0) {
        let search = Object.values(param);
        return (
            <div className="d-flex justify-content-center row mt-3" data-bs-theme="dark">
                <h1 className='mb-5 text-center text-white'>Sorry, no results found for: {search[0]}</h1>
                <h2 className='mb-5 text-center text-white'>Please try searching by a different title</h2>
                <img className="d-flex justify-content-center mx-auto shadow-lg mb-3" style={{ height: "400px", width: "400px" }} src={ErrorPageLogo} alt="" />
                <div className="d-flex justify-content-center p-2">
                    <button className="btn btn-outline-primary" onClick={() => window.history.back()}>Go back</button>
                </div>
            </div>
        );
    } else {
        const columns = [[], [], []];
        let i = 0;
        for (let movie of data.movies) {
            columns[i].push(movie);
            i += 1;
            if (i === 3) {
                i = 0;
            }
        }

        let search = Object.values(param);
        return (
            <div className="d-flex justify-content-center row mt-3" data-bs-theme="dark">
                <h1 className='mb-5 text-center text-white'>Search Results For: {search[0]}</h1>
                {columns.map(column => {
                    return (
                        <div key={columns.indexOf(column)} className="col-3">
                            {column.map(movie => {
                                return (
                                    <MovieCard key={movie.movie_id} movie={movie} />
                                )
                            })}
                        </div>
                    )
                })}
                <div className="d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <PrevNextButtons param={param} data={data} />
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default MoviesList;
