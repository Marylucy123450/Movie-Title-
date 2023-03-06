import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";


const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration Successful!');
    };

    
    return (
        <form className="container">
            <h2>Register Here</h2>
            <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="fs-6">We'll Keep your information classified.</div>
            </div>
            <div className="mb-3 col-lg-6">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" onClick={handleSubmit} className="btn btn-success">Submit</button>
            <Link to="/login"><button className="btn btn-primary ms-2">Login Here</button></Link>
        </form>
    )
}

export default Register;
