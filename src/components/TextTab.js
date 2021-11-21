import React from "react";

const TextTab = ({ title, content, subtitle }) => {
	return (
		<div className="">
			<div className="flex justify-center">
				<div
					className="flex flex-col text-white rounded-2xl py-5 gap-y-5 flex-grow"
					style={{ width: "80%" }}
				>
					<div className="text-right px-5">{subtitle}</div>
					<div className="items-center px-5">
						<div className="">
							<div
								style={{
									position: "relative",
									width: "100%",
								}}
							>
								<div className="text-5xl text-center py-5 mb-5">{title}</div>
								<div className="text-justify  mb-5">{content}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextTab;
