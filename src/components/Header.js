import { useState } from 'react'
import Logo from '../assets/logo.jpeg'

const Header = () => {
    const [backcolor, setBackcolor] = useState("green-color")
  return (
    <div className='header'>
        <div className='header-logo'>
            <img className='logo' src={Logo} alt="" />
            <h2>Taskmate</h2>
        </div>
        <div className='color-btns'>
            <button className="circle" style={{backgroundColor:'white'}}></button>
            <button className="circle" style={{backgroundColor:'rgb(210, 210, 210)'}}></button>
            <button className="circle" style={{backgroundColor:'black'}}></button>
            <button className="circle" style={{backgroundColor:'blue'}}></button>
            <button className="circle" style={{backgroundColor:'green'}}></button>
            <button className="circle" style={{backgroundColor:'yellow'}}></button>
        </div>
      
    </div>
  )
}

export default Header
