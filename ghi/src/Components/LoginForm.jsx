import { useState, useEffect } from "react";
import { useLoginMutation, useGetAllAccountsQuery } from "../app/moviesApiSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const { data, isLoading } = useGetAllAccountsQuery();
    const [login, result] = useLoginMutation();

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.accounts.includes(username)) {
            alert("This username does not exist");
        } else {
            login({ username, password });
        }
    }

    useEffect(() => {
        if (result.isSuccess) {
            navigate("/");
        } else if (result.isError) {
            alert(result.error.data.detail);
        }
    }, [result]);

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="col-md-6 text-white bg-dark shadow p-3 rounded-4">
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
    );
}

export default Login;
