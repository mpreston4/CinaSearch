import { useGetAllMoviesQuery } from "../app/moviesApiSlice";
import MovieSlide from "./MovieSlide";
import Search from "./Search";

const HomePage = () => {
    const { data, isLoading } = useGetAllMoviesQuery();

    if (isLoading) {
        return <p>Loading...</p>
    }

    const slides = [
        [], [], [], [], []
    ]

    let i = 0;
    for (let movie of data.movies) {
        slides[i].push(movie);
        if (slides[i].length === 2) {
            i += 1;
        }
    }

    return(
    <>
    <Search />
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-theme="dark">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner pb-5">
                {slides.map((movies, index) => {
                    if (index === 0) {
                        return(<MovieSlide key={movies[0].movie_id} movies={movies} class="carousel-item active" />);
                    } else {
                        return(<MovieSlide key={movies[0].movie_id} movies={movies} class="carousel-item" />);
                    }
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                <span style={{color: "black"}}>Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="false"></span>
                <span style={{color: "black"}}>Next</span>
            </button>
        </div>
    </>
    );
}

export default HomePage;
