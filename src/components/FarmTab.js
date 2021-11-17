import React from "react";

const FarmTab = ({ title, content }) => {
	return (
		<div className="container w-1/5 mb-5 border-solid border-blue-900 border-2 px-5 py-5">
			<h2>{title}</h2>
			<p>{content}</p>
		</div>
	);
};

export default FarmTab;
