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
import "./styles.css";
import "./DualSlidingPanel.css";

const TextTab = ({ title, content }) => {
	let smallerThan1280 = useMediaPredicate("(max-width: 1280px)");
	let smallerThan900 = useMediaPredicate("(max-width: 900px)");

	return (
		<div className="">
			<div className="flex justify-center">
				<div className="flex flex-col texttab-container">
					<div className="items-center px-5">
						<div className="">
							<div
								style={{
									position: "relative",
								}}
							>
								<div className="text-center mb-2 exchange-title">
									{title ? title : null}
								</div>
								<div className="mb-2 exchange-content">{content}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextTab;
