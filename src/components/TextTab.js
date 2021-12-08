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

const TextTab = ({ title, content }) => {
	let smallerThan1280 = useMediaPredicate("(max-width: 1280px)");
	let smallerThan900 = useMediaPredicate("(max-width: 900px)");

	return (
		<div className="">
			<div className="flex justify-center">
				<div className="flex flex-col" style={{ width: "100%" }}>
					<div className="items-center px-5">
						<div className="">
							<div
								style={{
									position: "relative",
								}}
							>
								<div className="text-center mb-3 exchange-title">
									{title ? title : null}
								</div>
								<div className="mb-3 exchange-content">{content}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextTab;
