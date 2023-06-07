import { useGetAllMoviesQuery } from "../app/moviesApiSlice";
import MovieSlide from "./MovieSlide";
import Search from "./Search";

const HomePage = () => {
    const { data, isLoading } = useGetAllMoviesQuery();

    if (isLoading) {
        return <p>Loading...</p>
    }

    const slides = [
        [], [], []
    ]

    let i = 0;
    for (let movie of data.movies) {
        slides[i].push(movie);
        if (slides[i].length === 3) {
            i += 1;
        }
    }

    return(
    <>
        <div className="container" style={{ height: '100vh' }}>
            <Search />
            <div id="carouselExampleIndicators" className="carousel slide bg-dark border border-black border-2 w-75 mx-auto shadow" data-bs-theme="light">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="container" style={{ width: '55vw'}}>
                    <div className="carousel-inner pb-5" data-bs-theme="dark">
                        {slides.map((movies, index) => {
                            if (index === 0) {
                                return(<MovieSlide key={movies[0].movie_id} movies={movies} class="carousel-item active" />);
                            } else {
                                return(<MovieSlide key={movies[0].movie_id} movies={movies} class="carousel-item" />);
                            }
                        })}
                    </div>
                </div>
                <button className="carousel-control-prev border border-black border-1" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                    <span style={{color: "white"}}>Previous</span>
                </button>
                <button className="carousel-control-next border border-black border-1" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span style={{color: "white"}}>Next</span>
                    <span className="carousel-control-next-icon" aria-hidden="false"></span>
                </button>
            </div>
        </div>
    </>
    );
}

export default HomePage;
