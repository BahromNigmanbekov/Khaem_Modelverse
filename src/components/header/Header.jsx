import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { FaBell, FaUserAlt } from 'react-icons/fa'
import { BsFillBasket3Fill } from 'react-icons/bs'
import { useCart } from "../../context/CartContext"

function Header() {

    const { cart } = useCart()

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

                    {/* Men qo‘shgan element */}
                    <NavLink to="/cart" className="my-basket-btn">
                        <BsFillBasket3Fill />
                        <span className="my-cart-count">{cart.length}</span>
                    </NavLink>

                </div>

            </div>
        </div>
    )
}

export default Header