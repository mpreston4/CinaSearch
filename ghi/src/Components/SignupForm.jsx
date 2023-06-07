import { useState } from "react";
import { useSignupMutation, useGetAllAccountsQuery } from "../app/moviesApiSlice";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [signup, result] = useSignupMutation();
    const { data, isLoading } = useGetAllAccountsQuery();
    const [email, setEmail] = useState('');
    const [full_name, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');

    if (isLoading) {
        return <div>Loading...</div>
    }

    console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirm_password) {
            if (data.accounts.includes(email)) {
                alert("Email is already associated with an account")
            } else {
                signup({email, password, full_name});
                navigate("/");

            }
        } else {
            alert("Passwords do not match!");
        }
    }

    return (
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-6 text-white bg-dark shadow p-3 rounded-4">
                    <h1>Signup</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Signup_email" className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Signup_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Signup_full_name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Signup_full_name"
                                value={full_name}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Signup_password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="Signup_password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Signup_password" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="Signup_confirm_password"
                                value={confirm_password}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
    )
}

export default Signup
