import React from "react";
import { withTheme } from "styled-components";
import style from "../css/animation.css";
import { Link } from "react-router-dom";

const TextTab = ({ color, title, content, subtitle }) => {
	return (
		<div>
			<div
				className="relative text-white rounded-2xl py-2 md:py-4 px-4 md:px-8 justify-between mb-3"
				style={{ backgroundColor: color }}
			>
				<p className="text-right">{subtitle}</p>
				<h2 className="text-5xl text-center">{title}</h2>
				<div className="text-left">
					<p>{content}</p>
				</div>
				<div className="filter hover:brightness-200 cursor-pointer">
					<Link to="/governance">
						<span
							className="px-5 py-1 text-xl border-solid border-1 border border-gray-100 rounded-3xl font-medium text-white"
							style={{ textDecoration: "none" }}
						>
							Read More
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TextTab;
