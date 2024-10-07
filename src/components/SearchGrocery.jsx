import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchGrocery = ({ searchItem, setSearchItem }) => {
	const handleChange = (value) => {
		setSearchItem(value);
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
