import { useParams } from "react-router-dom"
import { useGetMovieQuery } from "../app/moviesApiSlice"

const MovieDetail = () => {
    const movie = useParams()
    const { data, isLoading } = useGetMovieQuery(movie["movie_id"])
    console.log(data)
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="card mb-3" style={{width: 540}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={data.picture_url} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.plot}</p>
                        <p className="card-text text-body-secondary">{data.is_adult ? "Not Family-Friendly": "Family-Friendly"}</p>
                        <p className="card-text text-body-secondary">Length: {data.runtime} minutes</p>
                        <p className="card-text text-body-secondary">Released {data.release_year}</p>
                        <p className="card-text"><small className="text-body-secondary">Rating: {data.rating ? data.rating: "Not Rated"}</small></p>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
