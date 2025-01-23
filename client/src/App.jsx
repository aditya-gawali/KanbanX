
import './App.css';
import Homepage from './pages/Home/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './pages/Login/Loginpage';
import Signuppage from './pages/Signup/Signuppage';
import {Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    
      <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
      </Routes>
    </BrowserRouter>
        
      </>
  );
}

export default App;
