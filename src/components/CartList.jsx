import React from "react";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartButton from "./CartButton";

const CartList = ({
	cart,
	closeCart,
	setCart,
	totalSpendings,
	setTotalSpendings,
}) => {
	const total = cart
		.map((item) => {
			return Number(item.quantity) * item.price;
		})
		.reduce((sum, val) => {
			return sum + val;
		}, 0);

	const emptyCart = () => {
		setCart([]);
	};

	const removeFromCart = (cartId) => {
		const updatedCart = cart.filter((item) => item.id !== cartId);
		setCart(updatedCart);
	};

	const checkoutCart = () => {
		setTotalSpendings(totalSpendings + total);
		emptyCart();
	};

	return (
		<div className="cart-container">
			<CartHeader closeCart={closeCart} total={total} />
			<div className="cart-list">
				{cart.length > 0 ? (
					<>
						<p>
							<CartButton
								classVal="cart-btn"
								handleButton={emptyCart}
								buttonMessage="Empty Cart"
							/>
						</p>
						{cart.map((cartItem) => (
							<CartItem
								cartItem={cartItem}
								key={cartItem.id}
								removeFromCart={removeFromCart}
							/>
						))}
						<p>
							<CartButton
								classVal="cart-btn"
								handleButton={checkoutCart}
								buttonMessage="Checkout"
							/>
						</p>
					</>
				) : (
					<h1 className="cart-empty-message">Your cart is empty</h1>
				)}
			</div>
		</div>
	);
};

export default CartList;
