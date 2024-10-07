import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchGrocery = ({ setGroceries, fixedGroceries }) => {
	// ! TODO: Solve these issue using derived state
	const [searchItem, setSearchItem] = useState("");

	const handleChange = (value) => {
		setSearchItem(value);
		let updatedGroceries = fixedGroceries;

		if (value) {
			updatedGroceries = fixedGroceries.filter((grocery) =>
				grocery.name.toLowerCase().includes(value.toLowerCase())
			);
		}

		setGroceries(updatedGroceries);
	};

	return (
		<div className="search-container">
			<span className="search-icon-bar">
				<FaSearch className="search-icon" />
				<input
					type="text"
					value={searchItem}
					onChange={(e) => handleChange(e.target.value)}
					placeholder="Search groceries"
					className="search-bar"
				/>
			</span>
		</div>
	);
};

export default SearchGrocery;
