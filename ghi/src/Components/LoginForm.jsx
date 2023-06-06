import { useState, useEffect } from "react";
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

    useEffect(() => {
        if (result.isSuccess) {
            navigate("/")
        } else if (result.isError) {
            console.log(result)
            alert(result.error.data.detail)
            setError(result.isError)
            console.error(error)
        }
    }, [result])
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="col-md-6 text-white bg-dark shadow p-3">
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
