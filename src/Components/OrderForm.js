import React, { useState } from 'react';

export default function OrderForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        deliveryMethod: '',
        paymentMethod: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Викликаємо обробник події onSubmit, передаючи formData
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Ім'я:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Електронна пошта:</label> {/* Додано поле для вводу електронної пошти */}
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="address">Адреса доставки:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="deliveryMethod">Спосіб доставки:</label>
                <select
                    id="deliveryMethod"
                    name="deliveryMethod"
                    value={formData.deliveryMethod}
                    onChange={handleChange}
                    required
                >
                    <option value="">Оберіть спосіб доставки</option>
                    <option value="courier">Кур'єрська доставка</option>
                    <option value="pickup">Самовивіз</option>
                    {/* Додайте інші варіанти доставки за потреби */}
                </select>
            </div>
            <div>
                <label htmlFor="paymentMethod">Спосіб оплати:</label>
                <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                >
                    <option value="">Оберіть спосіб оплати</option>
                    <option value="online">Онлайн-оплата</option>
                    <option value="cash">Оплата при отриманні</option>
                    {/* Додайте інші варіанти оплати за потреби */}
                </select>
            </div>
            <button type="submit">Підтвердити замовлення</button>
        </form>
    );
}