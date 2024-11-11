import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './MyCart.css';

export const MyCart = () => {
    const location = useLocation();
    const [cart, setCart] = useState(location.state?.cart || JSON.parse(localStorage.getItem('cart')) || []); // Fallback to localStorage if state is undefined

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage whenever cart changes
        }
    }, [cart]);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cart.length > 0 ? (
                cart.map((product) => (
                    <div key={product.id} className="cart-item">
                        <img src={product.image} alt={product.name} className="cart-item-image" />
                        <div>
                            <h3>{product.name}</h3>
                            <p>Price: ₹{product.price}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};
