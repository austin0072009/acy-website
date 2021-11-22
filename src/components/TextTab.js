/*
 * @Author: Doctor
 * @Date: 2021-11-22 22:28:44
 * @LastEditTime: 2021-11-22 23:25:18
 * @LastEditors: Doctor
 * @Description: 
 * @FilePath: \acy-website\src\components\TextTab.js
 * jianqiang
 */
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
											fontWeight:'bold',
											paddingLeft:'2.5rem',
											textAlign:'left'
									}}
								>
								{title}
								</div>
								<div
									className="text-justify mb-5 px-10"
									style={{
										fontSize: smallerThan900
											? "1.25rem"
											: smallerThan1280
											? "1.25rem"
											: "1.25rem",
										lineHeight: 1.8,
										textAlign:'left'
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
