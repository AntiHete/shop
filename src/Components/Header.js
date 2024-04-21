import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
import { CSSTransition } from 'react-transition-group';
import OrderForm from './OrderForm';

export default function Header(props) {
    const [cartOpen, setCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [checkoutOpen, setCheckoutOpen] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        props.searchItems(event.target.value);
    };

    const showOrders = () => {
        let summa = 0;
        props.orders.forEach(el => summa += Number.parseFloat(el.price));
        return (
            <div>
                {props.orders.map(el => (
                    <Order onDelete={props.onDelete} key={el.id} item={el} />
                ))}
                <p className='summa'>Сума: {new Intl.NumberFormat().format(summa)}UAH</p>
                <button onClick={() => setCheckoutOpen(true)}>Оформити замовлення</button>
            </div>
        );
    };

    const showNothing = () => {
        return (
            <div className='empty'>
                <h2>Товарів немає</h2>
            </div>
        );
    };

    return (
        <header>
            <div>
                <span className='logo'>Food Store</span>
                <CSSTransition
                    in={true}
                    timeout={300}
                    classNames="slide-up"
                >
                    <input
                        type="text"
                        placeholder="Пошук..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                </CSSTransition>
                <ul className='nav'>
                    <li onClick={() => setCheckoutOpen(true)}>Оформлення замовлення</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}

                {checkoutOpen && (
                    <div className="checkout-form">
                        <h3>Форма оформлення замовлення</h3>
                        {/* Використовуємо компонент OrderForm */}
                        <OrderForm onSubmit={(formData) => {
                            console.log(formData);
                            setCheckoutOpen(false);
                        }} />
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
}
