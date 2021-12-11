// import "./btn.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./Header.css";

const StartedButton = () => {
	const openInNewTab = url => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div
			className="flex flex-row items-center"
			onClick={() => {
				openInNewTab("https://test.acy.finance/");
			}}
		>
			<a className="btn btn-sm animated-button thar-three font-bold">
				GET STARTED
				<span className="pl-3">
					<ArrowRightOutlined />
				</span>
			</a>
		</div>
	);
};

export default StartedButton;
