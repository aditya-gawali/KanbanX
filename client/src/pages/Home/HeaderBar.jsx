import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


const HeaderBar = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Redirects to the Login page
  };

  const handleSignupClick =()=>{
    navigate('/signup');
  }

  return (
    <>
      
        <Navbar expand="lg" className="bg text-white pb-3 pt-2  fixed-top border-bottom" style={{backgroundColor:"#91b3fa",boxShadow:"1px 0px 4px  black"}} >
          <Container>
            <Navbar.Brand href="#home"style={{fontWeight:"800",fontSize:"25px",color:"#fe7a6e"}}><span style={{color:"#5158ef"}}>Kanban</span >X</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="button-header">
              <button  onClick={handleSignupClick}type="button" className="btn btn-primary " style={{marginLeft:"40px",alignItems:"center",color:"#1a0f91", backgroundColor:"#fe7e73"}}>Sign up</button>
              <button onClick={handleLoginClick} type="button" className="btn btn-primary  " style={{marginLeft:"40px",alignItems:"center",color:"#1a0f91", backgroundColor:"#fe7e73"}}>Log in</button>
                
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
       
  )
}

export default HeaderBar
