import React from "react";
import { FaWindowClose } from "react-icons/fa";

const CartHeader = ({ closeCart, total }) => {
	return (
		<div className="cart-header">
			<div className="cart-title-total">
				<h1 className="cart-title">Cart</h1>
				<p className="cart-total">Total: ${total.toFixed(2)}</p>
			</div>
			<div className="cart-close-container">
				<FaWindowClose
					className="cart-close-icon"
					onClick={closeCart}
				/>
			</div>
		</div>
	);
};

export default CartHeader;
