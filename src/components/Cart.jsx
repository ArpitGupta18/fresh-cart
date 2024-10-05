import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ cart, setIsCartOpen }) => {
	const openCart = () => {
		setIsCartOpen(true);
	};

	return (
		<>
			<FaShoppingCart className="shopping-cart-icon" onClick={openCart} />
			<span className="cart-count">{cart.length}</span>
		</>
	);
};

export default Cart;
