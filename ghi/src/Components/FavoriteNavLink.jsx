import { useGetFavoritesQuery } from "../app/moviesApiSlice";
import { NavLink } from "react-router-dom";

function FavoriteNavLink() {
    const { data, isLoading } = useGetFavoritesQuery();

    if (isLoading) return <div>Loading...</div>

    return (
        <ul className="dropdown-menu">
            <li>
                <NavLink className="dropdown-item" to="wishlist">
                    My Wishlist{` `}
                    {data.favorites && <span className="badge bg-dark">{data.favorites?.filter(favorite => favorite.has_watched === false).length}</span>}
                </NavLink>
            </li>
            <li>
                <NavLink className="dropdown-item" to="watchedlist">
                    My Watched Movies{` `}
                    {data.favorites && <span className="badge bg-dark">{data.favorites?.filter(favorite => favorite.has_watched === true).length}</span>}
                </NavLink>
            </li>
        </ul>
    );
}

export default FavoriteNavLink;
