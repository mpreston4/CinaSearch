import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useGetAllGenresQuery } from "../app/moviesApiSlice";

const Search = () => {
    const { data } = useGetAllGenresQuery();
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');

    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate('/movies', {state: {title: title}});
    };
    const handleGenreClick = () => {
        navigate('/movies', {state: {genre: genre}});
    };



    return (
        <>
            <div className="input-group mb-3">
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Search by title..." aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button onClick={handleTitleClick} className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>

            <div className="input-group mb-3">
                <select value={genre} onChange={(e) => setGenre(e.target.value)} className="form-select" placeholder="Search by genre..." aria-describedby="basic-addon2">
                    <option value="">Choose a Genre</option>
                    {data.genres.map(genre => {
                        return (
                            <option key={genre} value={genre}>{genre}</option>
                        )
                    })}
                </select>
                <button onClick={handleGenreClick} className="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </>
    )
};


export default Search;
