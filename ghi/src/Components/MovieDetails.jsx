import { useGetMovieQuery } from "../app/moviesApiSlice"

function MovieDetail(props) {
    let movie_id = props.movie_id
    const { data, isLoading } = useGetMovieQuery(movie_id)
    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <>
            <div className="modal fade" id={movie_id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="card">
                        <img src={data.picture_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Plot: {data.plot}</p>
                            <p className="card-text text-body-secondary">Length: {data.runtime} minutes</p>
                            <p className="card-text text-body-secondary">Released {data.release_year}</p>
                            <p className="card-text"><small className="text-body-secondary">Rating: {data.rating ? data.rating: "Not Rated"}</small></p>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail
