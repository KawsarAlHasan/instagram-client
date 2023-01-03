import './App.css'
import NavbarTop from './components/NavbarTop'
import Home from './pages/Home'
import Explore from './pages/Explore'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RequireAuth from './components/RequireAuth'
import UserInfo from './pages/UserInfo'
import PostDetails from './components/PostDetails'
import ImagePost from './components/ImagePost'
import { ToastContainer } from 'react-toastify'
import Signup2 from './pages/Signup2'

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup2" element={<Signup2 />} />
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
                  <ImagePost />
                </RequireAuth>
              }
            />
            <Route
              path="/user/:userId"
              element={
                <RequireAuth>
                  <UserInfo />
                  <ImagePost />
                </RequireAuth>
              }
            />
            <Route
              path="/post/image/:postId"
              element={
                <RequireAuth>
                  <PostDetails />
                  <ImagePost />
                </RequireAuth>
              }
            />
            <Route
              path="/explore"
              element={
                <RequireAuth>
                  <Explore />
                  <ImagePost />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
