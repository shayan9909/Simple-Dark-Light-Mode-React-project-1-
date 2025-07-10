
import React, {useState} from 'react'
import './App.css'
const App = () => {
  const [darkMode, setDarkMode]= useState(false)
  return (
    <div className='App' data-theme={darkMode ? "dark" : "light"} >
      <h1 className='title'>Hello World !</h1>
     <div className="box">
      <div className="circle"></div>
      <h2>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</h2>
    <button onClick={() => setDarkMode(!darkMode)} > 
      <img className='moon' src="/moon.png" alt="" />
      <img className='sun' src="/sun.png" alt="" />
    </button>
     </div>
    </div>
  )
}

export default App