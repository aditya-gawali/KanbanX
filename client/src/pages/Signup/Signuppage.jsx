import React from 'react'

const Signuppage = () => {
  return (
    <div className = "body">

        <div className = "form-container" >
            <form action="/server">
                <h1 style={{fontSize:"36px",textAlign:"center"}}>Sign up</h1>

                <div className='input-box'>
                    
                    <input type="text" placeholder="Name" require/>
                </div>

                <div className="input-box">
                    <input type="email"placeholder="Email" required/>
                </div>

                <div className="input-box">
                    <input type="password"placeholder="password" required/>
                </div>
                
                
                
                <button type="submit"  className="btn-login">Sign up</button>

                <div className="register-link">
                    <p>Have an account ? <a href="#">Login Here!</a></p>
                </div>


            </form>
      
        </div>
    </div>
  )
}

export default Signuppage
