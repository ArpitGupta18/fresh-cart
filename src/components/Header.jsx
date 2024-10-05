import React from "react";

import Cart from "./Cart";

const Header = ({ cart, setIsCartOpen }) => {
	return (
		<header className="header p-120">
			<h1 className="title">Fresh Cart</h1>
			<div className="cart">
				<Cart cart={cart} setIsCartOpen={setIsCartOpen} />
			</div>
		</header>
	);
};

export default Header;
