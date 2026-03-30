import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { FaBell, FaUserAlt, FaBars, FaTimes } from 'react-icons/fa'
import { BsFillBasket3Fill } from 'react-icons/bs'
import { useCart } from "../../context/CartContext"

function Header() {

    const { cart } = useCart()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="container">
            <div className="header">
                <h2 className='logo'>KH<span className='logos'>.</span></h2>

            

                <ul className={`ul-list ${menuOpen ? "active" : ""}`}>
                    <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/shop" onClick={() => setMenuOpen(false)}>Book</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>


                    <li className="mobile-only">
                        <NavLink to="/notifications" onClick={() => setMenuOpen(false)}>
                            <FaBell /> Notifications
                        </NavLink>
                    </li>

                    <li className="mobile-only">
                        <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
                            <FaUserAlt /> Profile
                        </NavLink>
                    </li>

                    <li className="mobile-only">
                        <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
                            <BsFillBasket3Fill /> Cart ({cart.length})
                        </NavLink>
                    </li>
                </ul>

                <div className="buttons">
                    <button className="btn-search"><FaBell /></button>
                    <button className="btn-user"><FaUserAlt /></button>
                    <NavLink to="/cart" className="my-basket-btn">
                        <BsFillBasket3Fill />
                        <span className="my-cart-count">{cart.length}</span>
                    </NavLink>

                
                    <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                        
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header