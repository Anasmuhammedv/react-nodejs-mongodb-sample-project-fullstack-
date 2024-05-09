import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/components/Home'
import Login from './assets/components/Login'
import Signup from './assets/components/Signup'

function App() {
  
  return (
    <>
    <Routes>

      <Route path='/' Component={Login}/>
      <Route path='/Signup' Component={Signup}/>
      <Route path='/Home' Component={Home}/>

    
    </Routes>

    </>
  )
}

export default App
