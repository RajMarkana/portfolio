import { useState } from 'react'
import './App.css'
import SideMenu from './components/SideMenu'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex h-screen flex-wrap'>
        <SideMenu/>
        <Home/>
       </div>
    </>
  )
}

export default App
