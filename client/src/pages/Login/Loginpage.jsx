import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




const Loginpage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/users/login', {
            email: email,
            password: password
        }, { withCredentials: true })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        setEmail("");
        setPassword("");


        // navigate('/')
    }
    return (
        <div className="body">

            <div className="form-container" >
                <form onSubmit={handleSubmit}>
                    <h1 style={{ fontSize: "36px", textAlign: "center" }}>Login</h1>

                    <div className='input-box'>
                        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remeber Me</label>
                        <a href="#">Fogot Password ?</a>
                    </div>


                    <button type="submit" className="btn-login">Log in</button>

                    <div className="register-link">
                        <p>Don't have an account ? <Link to="/Signup">Register Here!</Link></p>
                    </div>


                </form>

            </div>
        </div>

    )
}

export default Loginpage
