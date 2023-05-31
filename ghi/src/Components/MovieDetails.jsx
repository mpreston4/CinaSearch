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
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{data.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={data.picture_url} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text">{data.plot}</p>
                                    <p className="card-text text-body-secondary">Length: {data.runtime} minutes</p>
                                    <p className="card-text text-body-secondary">Released {data.release_year}</p>
                                    <p className="card-text"><small className="text-body-secondary">Rating: {data.rating ? data.rating: "Not Rated"}</small></p>

                                </div>
                                </div>
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
