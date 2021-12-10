import "./JumpButton.css";
import "./DualSlidingPanel.css";
import RightOutlined from "../assets/svgs/rightOutlined.svg";

const JumpButton = props => {
	const openInNewTab = url => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div id="container" className="learn-more-class">
			<button
				class="learn-more jump-button-container"
				id="button-learn-more"
				onClick={() => {
					openInNewTab(props.links);
				}}
			>
				<span class="circle">
					{/* <span class="icon jumparrow"></span> */}
					{/* <RightOutlined className="icon jumparrow" style={{ zIndex: 100 }} /> */}
					<div className="icon jumparrow">
						<img
							src={RightOutlined}
							alt="Right Outlined arrow"
							style={{ width: "80%", height: "80%" }}
						/>
					</div>
				</span>
				<span class="button-text">{props.text}</span>
			</button>
		</div>
	);
};

export default JumpButton;
