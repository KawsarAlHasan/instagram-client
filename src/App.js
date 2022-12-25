import './App.css'
import NavbarTop from './components/NavbarTop'
import NavbarBottom from './components/NavbarBottom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RequireAuth from './components/RequireAuth'

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <div className="grid grid-cols-12">
        <div className="md:col-span-2 hidden md:block">
          <NavbarTop />
        </div>
        <div className="col-span-12 md:col-span-10">
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/explore"
              element={
                <RequireAuth>
                  <Explore />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </div>
      <NavbarBottom />
    </div>
  )
}

export default App
