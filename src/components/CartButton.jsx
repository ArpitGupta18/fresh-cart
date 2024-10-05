import React from "react";

const CartButton = ({ classVal, handleButton, buttonMessage }) => {
	return (
		<button className={classVal} onClick={handleButton}>
			{buttonMessage}
		</button>
	);
};

export default CartButton;
