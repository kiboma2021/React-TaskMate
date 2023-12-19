import { useState,useEffect } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../assets/logo.jpeg'

const Header = () => {
    
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");

  useEffect(() =>{
    localStorage.setItem("theme",JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  },[theme])

  return (
    <div className='header'>
        <div className='header-logo'>
          <Link to="/" className='header-logo'>
            <img className='logo' src={Logo} alt="" />
            <h2>Taskmate</h2>
          </Link>

          <nav className='header-logo'>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
          </nav>
        </div>
        <div className='color-btns'>
            <button onClick={()=>setTheme("light")} className={theme === 'light'?'circle light activeTheme':'circle light'}></button>
            <button onClick={()=>setTheme("grey")} className={theme === 'grey'?'circle grey activeTheme':'circle grey'}></button>
            <button onClick={()=>setTheme("dark")} className={theme === 'dark'?'circle dark activeTheme':'circle dark'}></button>
            <button onClick={()=>setTheme("blue")} className={theme === 'blue'?'circle blue activeTheme':'circle blue'}></button>
            <button onClick={()=>setTheme("green")} className={theme === 'green'?'circle green activeTheme':'circle green'}></button>
            <button onClick={()=>setTheme("yellow")} className={theme === 'yellow'?'circle yellow activeTheme':'circle yellow'}></button>
        </div>
      
    </div>
  )
}

export default Header
