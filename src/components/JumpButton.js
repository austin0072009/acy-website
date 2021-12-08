import "./JumpButton.css";
import "./DualSlidingPanel.css";
import { RightOutlined } from "@ant-design/icons";

const JumpButton = props => {
	const openInNewTab = url => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div id="container" className="learn-more-class">
			<button
				class="learn-more jump-button-container"
				id="button"
				onClick={() => {
					openInNewTab(props.links);
				}}
			>
				<span class="circle" aria-hidden="true">
					{/* <span class="icon jumparrow"></span> */}
					<RightOutlined className="icon jumparrow" style={{ zIndex: 100 }} />
				</span>
				<span class="button-text">{props.text}</span>
			</button>
		</div>
	);
};

export default JumpButton;
