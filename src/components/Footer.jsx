import React from "react";

const Footer = ({ totalSpendings }) => {
	return (
		<footer className="footer p-120">
			<p>Copyright &copy; 2024 Fresh Cart Inc. All rights reserved.</p>
			<p>Total Spendings: ${totalSpendings.toFixed(2)}</p>
		</footer>
	);
};

export default Footer;
