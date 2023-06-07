import { NavLink, useNavigate } from 'react-router-dom';
import FavoriteNavLink from './FavoriteNavLink';
import { useGetAccountQuery, useLogoutMutation } from '../app/moviesApiSlice';

function Nav() {
    const { data: account } = useGetAccountQuery()
    const [logout] = useLogoutMutation()
    const navigate = useNavigate()

    return (

      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
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
              {account&&<li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Favorite Movies
                </NavLink>
                <FavoriteNavLink />
              </li>}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li>
                {!account&& <NavLink className="nav-link" to="signup">Signup</NavLink>}
              </li>
              <li className='nav-item'>
                  {!account&& <NavLink className="nav-link" to="login">Login</NavLink>}
              </li>
              <li className='nav-item'>
                  {account&& <button className="btn btn-danger" type="button" onClick={() => {
                    logout()
                    navigate('/')}}>Logout</button>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;
