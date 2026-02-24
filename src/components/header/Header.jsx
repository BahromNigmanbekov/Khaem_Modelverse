import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { FaBell, FaUserAlt } from 'react-icons/fa'
import { BsFillBasket3Fill } from 'react-icons/bs'

function Header() {
    return (
        <div className="container">
            <div className="header">

                <h2 className='logo'>KH<span className='logos'>.</span></h2>


                <ul className='ul-list'>
                    <li><NavLink to="/">Home</NavLink></li>

                    <li><NavLink to="/shop">Book</NavLink></li>

                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

                <div className="buttons">
                    <button className="btn-search"><FaBell /></button>
                    <button className="btn-user"><FaUserAlt /></button>
                    <button className="btn-basket"><BsFillBasket3Fill /></button>
                </div>

            </div>
        </div>
    )
}

export default Header
