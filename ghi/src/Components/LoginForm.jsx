import { useState } from "react";
import { useLoginMutation } from "../app/moviesApiSlice";
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const [login, result] = useLoginMutation();
    const [error, setError] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        login({username, password})
    }
    if (result.isSuccess) {
        navigate("/")
    } else if (result.isError) {
        setError(result.error)
        console.error(error)
    }
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Login_username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Login_username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Login_password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="Login_password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
