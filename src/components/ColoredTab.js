import { useMediaPredicate } from "react-media-hook";
import { Link } from "react-router-dom";

const ColoredTab = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 568px)");
	let smallerThan1280 = useMediaPredicate("(max-width: 1280px)");

	return (
		<div className="flex flex-col bg-gov-bg bg-cover text-gray-100 rounded-2xl py-4 md:py-6 px-4 md:px-8 justify-between mb-3">
			<div
				className="font-medium mb-5"
				style={{ fontSize: smallerThan568 ? 24 : 28 }}
			>
				Governed by ACYDAO
			</div>

			<div
				className="mb-5"
				style={{ fontSize: smallerThan568 ? 14 : smallerThan1280 ? 16 : 18 }}
			>
				The ACY Protocol is governed by Decentralized Autonomous Organization of
				ACY token holders and their delegates who propose and vote on upgrades
				to the protocol.
			</div>
			{/* <div className="filter hover:brightness-200 cursor-pointer">
				<Link to="/governance">
					<span
						className="px-5 py-1 text-xl border-solid border-1 border border-gray-100 rounded-3xl font-medium text-white"
						style={{ textDecoration: "none" }}
					>
						Read More
					</span>
				</Link>
			</div> */}
		</div>
	);
};

export default ColoredTab;
