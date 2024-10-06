import React from "react";

const DarkLayer = ({ closeCart, zIndexVal }) => {
	return (
		<div
			className="dark-overlay"
			style={{ zIndex: zIndexVal }}
			onClick={closeCart}
		></div>
	);
};

export default DarkLayer;
