import React from "react";

const DarkLayer = ({ closeCart }) => {
	return <div className="dark-overlay" onClick={closeCart}></div>;
};

export default DarkLayer;
