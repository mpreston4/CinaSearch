import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllGenresQuery } from "../app/moviesApiSlice";
import CineSearchLogo from "../images/CineSearchLogo.png";

function Search() {
    const { data, isLoading } = useGetAllGenresQuery();

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');

    const handleTitleClick = () => {
        navigate('/movies/1', { state: { title: title } });
    }
    const handleGenreClick = () => {
        navigate('/movies/1', { state: { genre: genre } });
    }

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col">
                    <img className="d-flex justify-content-center mx-auto shadow-lg" style={{ height: "300px", width: "300px" }} src={CineSearchLogo} alt="" />
                </div>
                <div className="col position-relative">
                    <div className="position-absolute top-50 start-50 translate-middle">
                        <div className="row">
                            <div style={{ width: "350px" }} className="input-group col-md-6 p-2">
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Search by title..." aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button onClick={handleTitleClick} className="btn btn-outline-warning" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div style={{ width: "350px" }} className="input-group col-md-6 p-2">
                                <select value={genre} onChange={(e) => setGenre(e.target.value)} className="form-select" placeholder="Search by genre..." aria-describedby="basic-addon2">
                                    <option value="">Choose a Genre</option>
                                    {data.genres.map(genre => {
                                        return (
                                            <option key={genre} value={genre}>{genre}</option>
                                        )
                                    })}
                                </select>
                                <div className="input-group-append">
                                    <button onClick={handleGenreClick} className="btn btn-outline-warning" type="button">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
