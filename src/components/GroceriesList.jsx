import React from "react";
import GroceryItem from "./GroceryItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GroceriesList = ({ groceries, cart, setCart }) => {
	const addToCart = (cartItem) => {
		const itemInCart = cart.find((element) => element.id === cartItem.id);

		if (itemInCart) {
			toast.info("Item exists, updating quantity...");
			console.log("Item already exists in cart. Quantity increased");
			const updatedCart = cart.map((item) => {
				return item.id === cartItem.id
					? {
							...item,
							quantity: item.quantity + 1,
					  }
					: item;
			});
			setCart(updatedCart);
		} else {
			setCart([...cart, { ...cartItem, quantity: 1 }]);
		}
	};
	return (
		<div className="main-container p-120">
			<div className="groceries-container">
				{groceries.map((grocery) => (
					<GroceryItem
						key={grocery.id}
						grocery={grocery}
						addToCart={addToCart}
					/>
				))}
			</div>
			<ToastContainer
				position="top-right"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default GroceriesList;
