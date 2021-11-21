import React from "react";
import { useMediaPredicate } from "react-media-hook";

const TextTab = ({ title, content, subtitle }) => {
	let smallerThan1280 = useMediaPredicate("(max-width: 1280px)");
	let smallerThan900 = useMediaPredicate("(max-width: 900px)");

	return (
		<div className="">
			<div className="flex justify-center">
				<div
					className="flex flex-col text-white py-5 gap-y-5 flex-grow"
					style={{ width: "80%" }}
				>
					<div className="items-center px-5">
						<div className="">
							<div
								style={{
									position: "relative",
									width: "100%",
								}}
							>
								<div
									className="text-center py-5 mb-5"
									style={{
										fontSize: smallerThan900
											? "2rem"
											: smallerThan1280
											? "2.5rem"
											: "2.75rem",
										letterSpacing: "5px",
									}}
								>
									{title}
								</div>
								<div
									className="text-justify mb-5 px-10"
									style={{
										fontSize: smallerThan900
											? "0.75rem"
											: smallerThan1280
											? "0.75rem"
											: "0.75rem",
										lineHeight: 1.8,
									}}
								>
									{content}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextTab;
