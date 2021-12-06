import React from "react";
import "./DetailCard.css";

const DetailCard = ({ title, timeline, description, deliverables }) => {
	return (
		<div className="DetailCard">
			<div className="content">
				<div className="detailcard-title">{title}</div>
				<div className="deliverables">{deliverables}</div>
			</div>
		</div>
	);
};

export default DetailCard;
