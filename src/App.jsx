import React, { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data/groceries";
import Header from "./components/Header";
import GroceriesList from "./components/GroceriesList";
import CartList from "./components/CartList";
import DarkLayer from "./components/DarkLayer";
import Footer from "./components/Footer";
import RemoveFromCartModal from "./components/RemoveFromCartModal";

const App = () => {
	const [groceries, setGroceries] = useState(data);
	const [cart, setCart] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [totalSpendings, setTotalSpendings] = useState(0);
	const [isRemoveFromCartModalOpen, setIsRemoveFromCartModalOpen] =
		useState(false);
	const [itemToRemove, setItemToRemove] = useState(null);

	const [searchItem, setSearchItem] = useState("");

	const closeModal = () => {
		setIsRemoveFromCartModalOpen(false);
	};

	const emptyCart = () => {
		setCart([]);
	};
	const closeCart = () => {
		setIsCartOpen(false);
	};

	const confirmRemoveItem = () => {
		if (itemToRemove === "all") {
			setCart([]);
		} else {
			const updatedCart = cart.filter((item) => item.id !== itemToRemove);
			setCart(updatedCart);
			setItemToRemove(null);
		}
		closeModal();
	};

	let updatedGroceries = groceries.filter((grocery) =>
		grocery.name.toLowerCase().includes(searchItem.toLowerCase())
	);

	return (
		<div>
			<Header cart={cart} setIsCartOpen={setIsCartOpen} />
			<GroceriesList
				groceries={updatedGroceries}
				cart={cart}
				setCart={setCart}
				setGroceries={setGroceries}
				searchItem={searchItem}
				setSearchItem={setSearchItem}
			/>
			{isRemoveFromCartModalOpen && (
				<>
					<DarkLayer closeCart={closeModal} zIndexVal="1001" />
					<RemoveFromCartModal
						confirmRemove={confirmRemoveItem}
						closeModal={closeModal}
					/>
				</>
			)}
			{isCartOpen && <DarkLayer closeCart={closeCart} zIndexVal="999" />}
			{isCartOpen && (
				<CartList
					cart={cart}
					closeCart={closeCart}
					totalSpendings={totalSpendings}
					setTotalSpendings={setTotalSpendings}
					setIsRemoveFromCartModalOpen={setIsRemoveFromCartModalOpen}
					setItemToRemove={setItemToRemove}
					emptyCart={emptyCart}
				/>
			)}
			<Footer totalSpendings={totalSpendings} />
		</div>
	);
};

export default App;
