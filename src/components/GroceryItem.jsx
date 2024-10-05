import React from "react";

const GroceryItem = ({ grocery, addToCart }) => {
	return (
		<div className="grocery-item">
			<img src={grocery.image_url} alt="" />
			<div className="grocery-name-category">
				<p className="grocery-name">{grocery.name}</p>
				<p className="grocery-category">({grocery.category})</p>
			</div>
			<p className="grocery-description">{grocery.description}</p>
			<p className="grocery-price">${grocery.price}</p>
			<button
				className="add-to-cart-button"
				onClick={() => addToCart(grocery)}
			>
				Add to Cart
			</button>
		</div>
	);
};

export default GroceryItem;
