import { useState,useEffect } from 'react'
import Logo from '../assets/logo.jpeg'

const Header = () => {
    
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");

  useEffect(() =>{
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  },[theme])

  return (
    <div className='header'>
        <div className='header-logo'>
            <img className='logo' src={Logo} alt="" />
            <h2>Taskmate</h2>
        </div>
        <div className='color-btns'>
            <button onClick={()=>setTheme("light")} className="circle light"></button>
            <button onClick={()=>setTheme("grey")} className="circle grey"></button>
            <button onClick={()=>setTheme("dark")} className="circle dark activeTheme"></button>
            <button onClick={()=>setTheme("blue")} className="circle blue"></button>
            <button onClick={()=>setTheme("green")} className="circle green"></button>
            <button onClick={()=>setTheme("yellow")} className="circle yellow"></button>
        </div>
      
    </div>
  )
}

export default Header
