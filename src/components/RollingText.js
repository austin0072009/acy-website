import "./RollingText.css";

const RollingText = () => {
	return (
		<div className="main rolling-title flex flex-col font-bold rolling-text">
			<h1 className="">ACY PROTOCOL</h1>
			<h2>The Most Profitable Decentralized Crypto Trading Protocol</h2>
			<div className="roller">
				<span className="rolltext">
					<div className="orange text-white">Low Slippage </div>
					<div className="green text-white">Extra Income </div>
					<div className="blue text-white">Mutual Benefit </div>

					<span id="spare-time">too much spare time?</span>
					<br />
				</span>
			</div>
		</div>
	);
};

export default RollingText;
