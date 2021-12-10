import React from "react";
import "./DetailCard.css";

const DetailCard = ({ title, timeline, description, deliverables, odd }) => {
	return (
		<div className={odd ? "DetailCard detail-card-odd" : "DetailCard"}>
			<div className="content">
				{/* <div className="detailcard-title">{title}</div> */}
				<div className="deliverables">{deliverables}</div>
			</div>
		</div>
	);
};

export default DetailCard;
