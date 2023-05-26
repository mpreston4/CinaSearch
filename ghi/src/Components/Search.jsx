import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/movies', {state: {title: title}});
    };

    return (
        <div className="input-group mb-3">
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Search by title..." aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                    <button onClick={handleClick} className="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
    )
};

export default Search;
