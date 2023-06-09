import { useGetAccountQuery } from "../app/moviesApiSlice";
import { useGetMovieQuery } from "../app/moviesApiSlice";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import HasWatchedButton from "./HasWatchedButton";

function MovieDetail(props) {
    const { data: account } = useGetAccountQuery();
    let movie_id = props.movie_id;
    const { data, isLoading } = useGetMovieQuery(movie_id);

    const navigate = useNavigate();

    if (isLoading) return <div>Loading ...</div>

    return (
        <div className="modal fade" id={movie_id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className='text-center'>{data.title}</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="card">
                            <img src={data.picture_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Plot: {data.plot}</p>
                                <p className="card-text">Genres: {data.genres.map((genre, index) => {
                                    if (index < data.genres.length - 1) {
                                        return `${genre}, `
                                    }
                                    return genre
                                })}</p>
                                <p className="card-text text-body-secondary">Length: {data.runtime} minutes</p>
                                <p className="card-text text-body-secondary">Released {data.release_year}</p>
                                <p className="card-text"><small className="text-body-secondary">Rating: {data.rating ? data.rating : "Not Rated"}</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="col-4 text-end">
                            {account ? <HasWatchedButton movie_id={data.movie_id} has_watched={props.has_watched} email={account.email} /> : ''}
                            {account ? <FavoriteButton movie_id={data.movie_id} title={data.title} picture_url={data.picture_url} /> : <button onClick={() => navigate("/login")} className='btn btn-outline-primary' data-bs-dismiss="modal">Favorite</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
