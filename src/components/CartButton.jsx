import React from "react";

const CartButton = ({ classVal, handleButton, buttonMessage, val }) => {
	return (
		<button
			className={classVal}
			onClick={val === 0 ? () => handleButton("all") : handleButton}
		>
			{buttonMessage}
		</button>
	);
};

export default CartButton;
