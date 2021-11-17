import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { useMediaPredicate } from "react-media-hook";
import { Link } from "react-router-dom";
import Countdown from "./CountDown";
import logo from "../assets/logo.svg";

const Launch = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	return (
		<div>
			<div className="flex items-center text-gray-100 mb-5 filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100">
				<img
					src={arrowBullet}
					style={{ maxWidth: 40 }}
					alt="arrow"
					className="mr-3 moveLROnHover "
				/>
				<span
					className="font-medium text-orange"
					style={{ fontSize: smallerThan568 ? 20 : 26 }}
				>
					LAUNCH
				</span>
			</div>
			<div container>
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-row items-center">
						<img src={logo} className="px-5" style={{ width: "70px" }}></img>
						<p>ACY Finance</p>
					</div>
					<div>
						<Countdown></Countdown>
					</div>
					<div style={{ color: "rgb(198, 34, 78)" }}>
						<p>Latest solid IDO for your profit</p>
						<div className="filter hover:brightness-200 cursor-pointer mb-5">
							<Link to="/governance">
								<span
									className="px-5 py-1 text-xl border-solid border-1 border border-blue-900 rounded-3xl font-medium text-white"
									style={{ textDecoration: "none" }}
								>
									Read More
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Launch;
