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
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{data.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3">
                            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                            <input type="text" className="form-control" id="recipient-name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Message:</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Send message</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail
