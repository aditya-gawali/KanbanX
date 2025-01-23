import React from 'react'
import {Link} from 'react-router-dom'




const Loginpage = () => {
  return (
    <div className = "body">

        <div className = "form-container" >
            <form action="/server">
                <h1 style={{fontSize:"36px",textAlign:"center"}}>Login</h1>

                <div className='input-box'>
                    <input type="text" placeholder="Username" required/>
                </div>

                <div className="input-box">
                    <input type="password"placeholder="password" required/>
                </div>
                
                <div className = "remember-forgot">
                <label><input type="checkbox"/> Remeber Me</label>
                <a href="#">Fogot Password ?</a>
                </div>
                
                
                <button type="submit"  className="btn-login">Log in</button>

                <div className="register-link">
                    <p>Don't have an account ? <Link to="/Signup">Register Here!</Link></p>
                </div>


            </form>
      
        </div>
    </div>
    
  )
}

export default Loginpage
