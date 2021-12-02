import React from "react";

const DetailCard = ({ title, timeline, description, deliverables }) => {
	return (
		<div className="DetailCard">
			<div className="popover__content">
				<div className="DetailCardDescription">{description}</div>
				<br />
				<div className="DetailCardDeliverables">{deliverables}</div>
			</div>
		</div>
	);
};

export default DetailCard;
