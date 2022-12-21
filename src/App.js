import './App.css'
import NavbarTop from './components/NavbarTop'
import NavbarBottom from './components/NavbarBottom'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="md:col-span-2 hidden md:block">
          <NavbarTop />
        </div>
        <div className="col-span-12 md:col-span-10 a">
          <Home />
        </div>
      </div>
      <NavbarBottom />
    </div>
  )
}

export default App
