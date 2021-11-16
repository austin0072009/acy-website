import React from "react";
import { withTheme } from "styled-components";
import style from "../css/animation.css";

const TextTab = ({ color, title, content, subtitle }) => {
	return (
		<div>
			<div
				className="relative text-white rounded-2xl py-2 md:py-6 px-4 md:px-10 justify-between mb-3"
				style={{ backgroundColor: color }}
			>
				<p className="text-right ">{subtitle}</p>
				<h2 className="text-5xl text-center">{title}</h2>
				<div className="text-left">
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default TextTab;
