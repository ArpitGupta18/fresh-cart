import React from "react";

const RemoveFromCartModal = ({ confirmRemove, closeModal }) => {
	return (
		<div className="remove-cart-modal">
			<p className="remove-cart-text">
				Are you sure you want to remove the item?
			</p>
			<div className="remove-cart-buttons">
				<button onClick={confirmRemove}>Yes</button>{" "}
				<button onClick={closeModal}>Cancel</button>{" "}
			</div>
		</div>
	);
};

export default RemoveFromCartModal;
