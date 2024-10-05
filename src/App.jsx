import React, { useState } from "react";
import "./App.css";
import { data } from "./data/groceries";
import Header from "./components/Header";
import GroceriesList from "./components/GroceriesList";
import CartList from "./components/CartList";
import DarkLayer from "./components/DarkLayer";
import Footer from "./components/Footer";

const App = () => {
	const [groceries, setGroceries] = useState(data);
	const [cart, setCart] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [totalSpendings, setTotalSpendings] = useState(0);

	const closeCart = () => {
		setIsCartOpen(false);
	};

	console.log(cart);
	return (
		<div>
			<Header cart={cart} setIsCartOpen={setIsCartOpen} />
			<GroceriesList
				groceries={groceries}
				cart={cart}
				setCart={setCart}
			/>
			{isCartOpen && <DarkLayer closeCart={closeCart} />}
			{isCartOpen && (
				<CartList
					cart={cart}
					closeCart={closeCart}
					setCart={setCart}
					totalSpendings={totalSpendings}
					setTotalSpendings={setTotalSpendings}
				/>
			)}
			<Footer totalSpendings={totalSpendings} />
		</div>
	);
};

export default App;
