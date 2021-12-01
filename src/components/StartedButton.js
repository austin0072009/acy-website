// import "./btn.css"
import { ArrowRightOutlined } from "@ant-design/icons";

const StartedButton = () => {
	const openInNewTab = url => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div
			className="flex flex-row"
			onClick={() => {
				openInNewTab("https://test.acy.finance/");
			}}
		>
			<a className="btn btn-sm animated-button thar-three">
				GET STARTED
				<span className="pl-3">
					<ArrowRightOutlined />
				</span>
			</a>
		</div>
	);
};

export default StartedButton;
