import { NavLink, redirect, useNavigate } from 'react-router-dom';
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
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Home</NavLink>
            {account&&<NavLink className="navbar-brand" to="favorites">
              My Favorites{` `}
              {data.favorites && <span className="badge bg-dark">{data.favorites?.length}</span>
            }</NavLink>}
            {!account&&<NavLink className="navbar-brand" to="signup">Signup</NavLink>}
            {!account&&<NavLink className="navbar-brand" to="login">Login</NavLink>}
              {account && <button className="btn btn-danger" type="button" onClick={() => {
                  logout()
                  navigate('/')
              } }>
              Logout
              </button>}
          </div>
        </nav>
      </>
    )
}

export default Nav;
