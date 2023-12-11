import Logo from '../assets/logo.jpeg'

const Header = () => {
  return (
    <div className='header'>
        <div>
            <img className='logo' src={Logo} alt="" />
            <h3>Taskmate</h3>
        </div>
        <div>
            <button className="circle"></button>
            <button className="circle"></button>
            <button className="circle"></button>
            <button className="circle"></button>
            <button className="circle"></button>
            <button className="circle"></button>
        </div>
      
    </div>
  )
}

export default Header
