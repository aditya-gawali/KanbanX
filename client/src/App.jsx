
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import NavbarD from './components/NavbarD';
import Sidebar from './components/Sidebar';
import HeaderBar from './components/HeaderBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  const DashBoardLayout = () => {
    return (
      <>
        <NavbarD />
        <Sidebar />
        <Outlet />
      </>
    )
  }

  const Layout = () => {
    return (
      <>
        <HeaderBar />
        <Outlet />
      </>
    )
  }

  return (

    <>
      <BrowserRouter>

        <ToastContainer />

        <Routes>
          <Route path="/" element={<Layout />} >

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/" element={<DashBoardLayout />}>
            <Route path='/dashboard' element={<DashBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
