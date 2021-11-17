import React from "react";

const FarmTab = ({ title, content }) => {
	return (
		<div className="w-1/5 mb-5">
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	);
};

export default FarmTab;
