import { Link } from 'react-router-dom';

const MovieSlide = ({movies}) => {
    return(
        <div className="carousel-item">
            <div className="d-flex justify-content-center row mt-3">
                {movies.map(movie => {
                    return(
                        <div key={movie.movie_id} className="col-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <img className="card-img-top" src={movie.picture_url} alt="picture_url"/>
                                    <Link to={`/movies/${movie.movie_id}`}>Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MovieSlide;
