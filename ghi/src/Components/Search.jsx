import { useState } from "react";
import { Link } from 'react-router-dom'

const Search = () => {
    const [title, setTitle] = useState('')
    // const [genre, setGenre] = useState([])


    return (
        <div className="input-group mb-3">
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Search by title..." aria-describedby="basic-addon2"/>
            <div className="input-group-append">
                <Link to={{
                    pathname: "/movies",
                    state: {search: title}
                }}
                className="btn btn-outline-secondary" type="button">Search</Link>
            </div>
        </div>
    )
};

export default Search;
