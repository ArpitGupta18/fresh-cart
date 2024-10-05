import React from "react";

const CartItem = ({ cartItem, removeFromCart }) => {
	return (
		<div className="cart-item">
			<img src={cartItem.image_url} alt="" className="cart-item-image" />
			<div className="cart-item-container">
				<p className="cart-item-name">{cartItem.name}</p>
				<p className="cart-item-category">({cartItem.category})</p>
				<p className="cart-item-description">{cartItem.description}</p>
				<p className="cart-item-price">Price: ${cartItem.price}</p>

				<p className="cart-item-quantity">
					Quantity: {cartItem.quantity}
				</p>
				<button
					className="cart-item-remove-button"
					onClick={() => removeFromCart(cartItem.id)}
				>
					Remove
				</button>
			</div>
		</div>
	);
};

export default CartItem;
