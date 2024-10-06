import React from "react";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartButton from "./CartButton";

const CartList = ({
	cart,
	closeCart,
	emptyCart,
	totalSpendings,
	setTotalSpendings,
	setIsRemoveFromCartModalOpen,
	setItemToRemove,
}) => {
	const total = cart
		.map((item) => Number(item.quantity) * item.price)
		.reduce((sum, val) => sum + val, 0);

	const openRemoveFromCartModal = (cartId) => {
		setItemToRemove(cartId);
		setIsRemoveFromCartModalOpen(true);
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
								handleButton={openRemoveFromCartModal}
								buttonMessage="Empty Cart"
								val={0}
							/>
						</p>
						{cart.map((cartItem) => (
							<CartItem
								cartItem={cartItem}
								key={cartItem.id}
								removeFromCart={() =>
									openRemoveFromCartModal(cartItem.id)
								}
							/>
						))}
						<p>
							<CartButton
								classVal="cart-btn"
								handleButton={checkoutCart}
								buttonMessage="Checkout"
								val={1}
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
