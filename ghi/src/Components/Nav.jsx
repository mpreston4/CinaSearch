import { NavLink, redirect } from 'react-router-dom';
import { useGetAccountQuery, useLogoutMutation } from '../app/moviesApiSlice';

function Nav() {
    const { data: account } = useGetAccountQuery()
    const [logout] = useLogoutMutation()

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          {!account&&<NavLink className="navbar-brand" to="signup">Signup</NavLink>}
          {!account&&<NavLink className="navbar-brand" to="login">Login</NavLink>}
            {account && <button className="btn btn-danger" type="button" onClick={() => {
                logout()
                return redirect('/')
            } }>
            Logout
            </button>}
        </div>
      </nav>
    </>
  )
}

export default Nav;
