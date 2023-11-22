import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={BurgerLogo} alt=''/>
            <div className='mainLink'>
                <Link to='/'>Anasayfa</Link>
                <Link to='/Menu'>Menü</Link>
                <Link to='/About'>Hakkımızda</Link>
                <Link to='/contact'>İletişim</Link>
            </div>

        </div>


   </div>
  )
}
export default Navbar;