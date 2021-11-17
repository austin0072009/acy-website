import React from "react";
import { withTheme } from "styled-components";
import style from "../css/animation.css";
import { Link } from "react-router-dom";

const TextTab = ({ color, title, content, subtitle, link, linkName }) => {
	return (
		<div>
			<div
				className="flex flex-col text-white rounded-2xl py-4 px-8 mb-3"
				style={{ backgroundColor: color }}
			>
				<p className="text-right">{subtitle}</p>
				<p className="text-5xl text-center flex-grow">{title}</p>
				<div className="text-justify mb-5">
					<p>{content}</p>
				</div>
				<div
					className="filter hover:brightness-200 cursor-pointer mb-2"
					style={{ marginLeft: "auto", marginRight: 0 }}
				>
					<Link to={link}>
						<span
							className="px-5 py-1 text-xl border-solid border-1 border border-gray-100 rounded-3xl font-medium text-white"
							style={{
								textDecoration: "none",
							}}
						>
							{linkName}
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TextTab;
