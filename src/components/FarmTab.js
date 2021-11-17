import React from "react";

const FarmTab = ({ title, content }) => {
	return (
		<div className="container w-1/5 mb-5 border-solid border-blue-900 border-2 px-5 py-5">
			<div className="flex flex-col items-center px-3 text-center">
				<h2 className="text-4xl">{title}</h2>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default FarmTab;
