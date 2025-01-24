import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signuppage = () => {

    const navigate = useNavigate();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/users/signup', {
            name: name,
            email: email,
            password: password
        }, { withCredentials: true })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

        setName("");
        setEmail("");
        setPassword("");

        navigate('/login')
    }

    return (
        <div className="body">

            <div className="form-container" >
                <form onSubmit={handleSubmit}>
                    <h1 style={{ fontSize: "36px", textAlign: "center" }}>Sign up</h1>

                    <div className='input-box'>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} require />
                    </div>

                    <div className="input-box">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>



                    <button type="submit" className="btn-login">Sign up</button>

                    <div className="register-link">
                        <p>Have an account ? <Link to="/Login" >Login Here!</Link></p>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default Signuppage
