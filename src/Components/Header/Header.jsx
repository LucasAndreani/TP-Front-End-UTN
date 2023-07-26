import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className='left-section-header'>
          <p className='black-market'>Pokémon Black Market.</p>
          <img className='mew-logo' src='https://dinopixel.com/preload/0422/Mew-Pokemon-.png'></img>
        </div>
        <div className='middle-section-header'>
          <NavLink to='/HomePage'>
          <img className='house-icon' src='src/images/house-fill.svg'></img>
          <p className='home'>Home</p>
          </NavLink>
        </div>
        <div className='right-section-header'>
          <NavLink to='/Contact'>
          <img className='contact-icon' src='src/images/envelope.svg'></img>
          </NavLink>
          <NavLink to='/Cart'>
            <img className='cart-icon' src='https://cdn-icons-png.flaticon.com/512/1068/1068729.png'></img>
          </NavLink>
          <p className='cart-word'>Cart</p>
          <p className='contact-word'>Contact</p>
        </div>
      </header>
  )
}

export default Header