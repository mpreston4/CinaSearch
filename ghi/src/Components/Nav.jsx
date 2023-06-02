import { NavLink, useNavigate } from 'react-router-dom';
import { useGetAccountQuery, useLogoutMutation, useGetFavoritesQuery } from '../app/moviesApiSlice';

function Nav() {
    const { data: account } = useGetAccountQuery()
    const { data, isLoading } = useGetFavoritesQuery()
    const [logout] = useLogoutMutation()
    const navigate = useNavigate()
    if (isLoading) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      // <>
      //   <nav className="navbar navbar-expand-lg navbar-dark bg-success justify-content-start">
      //     <div className="container-fluid">
      //       <NavLink className="navbar-brand" to="/">Home</NavLink>
      //       {account&&<NavLink className="navbar-brand" to="favorites">
      //         My Favorites{` `}
      //         {data.favorites && <span className="badge bg-dark">{data.favorites?.filter(favorite => favorite.has_watched===false).length}</span>
      //       }</NavLink>}
      //       {account&&<NavLink className="navbar-brand" to="watchlist">
      //         My Watched Movies{` `}
      //         {data.favorites && <span className="badge bg-dark">{data.favorites?.filter(favorite => favorite.has_watched===true).length}</span>
      //       }</NavLink>}
      //       {!account&&<NavLink className="navbar-brand" to="signup">Signup</NavLink>}
      //       {!account&&<NavLink className="navbar-brand" to="login">Login</NavLink>}
      //         {account && <button className="btn btn-danger" type="button" onClick={() => {
      //             logout()
      //             navigate('/')
      //         } }>
      //         Logout
      //         </button>}
      //     </div>
      //   </nav>
      // </>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">CinaSearch</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              {account&&<li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Saved Movies
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                      <NavLink className="dropdown-item" to="favorites">
                        My Watch List{` `}
                        {data.favorites && <span className="badge bg-dark">{data.favorites?.filter(favorite => favorite.has_watched===false).length}</span>}
                      </NavLink>
                  </li>
                  <li>
                      <NavLink className="dropdown-item" to="favorites">
                        My Watched Movies{` `}
                        {data.favorites && <span className="badge bg-dark">{data.favorites?.filter(favorite => favorite.has_watched===true).length}</span>}
                      </NavLink>
                    </li>
                </ul>
              </li>}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className='nav-item'>
                  <NavLink className="nav-link">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;
