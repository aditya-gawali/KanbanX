
import HomePage from './pages/Homepage'

import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import { ThemeProvider } from "@/components/theme-provider"
import Dashboard from './pages/Dashboard';

function App() {

  const Layout = () => {
    return (
      <>
        {/* <Navbar /> */}
        <Outlet />
      </>
    )
  }

  
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <BrowserRouter>

          <ToastContainer />

          <Routes>
            <Route path="/" element={<Layout />} >

              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Loginpage />} />
              <Route path="/signup" element={<Signuppage />} />
            </Route>
            <Route path="/">
              <Route path='/dashboard' element={<Dashboard />} />
              {/* <Route path='/board' element={<Boards />} /> */}
              {/* <Route path='/board/:id' element={<Boards />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

    </>
  )
}

export default App
