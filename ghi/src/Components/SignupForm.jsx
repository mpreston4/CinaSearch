import { useState } from "react";
import { useSignupMutation } from "../app/moviesApiSlice";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [signup, result] = useSignupMutation();
    const [error, setError] = useState(null);

    const [email, setEmail] = useState('');
    const [full_name, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirm_password) {
            signup({email, password, full_name});
        } else {
            alert("Passwords do not match!");
        }
    }

    if (result.isSuccess) {
        navigate("/");
    } else if (result.isError) {
        setError(result.error);
        console.error(error);
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
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
                            id="Signup_password"
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
