import './App.css'
import Navbar from './compmonents/clientSide/Navbar'
import {Outlet} from "react-router-dom"
import Footer from './compmonents/clientSide/Footer'

function App() {

  return (
  <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default App
