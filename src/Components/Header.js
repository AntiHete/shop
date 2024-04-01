import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Food Store</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакти</li>
                <li>Кабінет</li>
            </ul>
            <FaShoppingCart className='shop-cart-button' />
        </div>
        <div className='presentation'></div>
    </header>
  )
}
