import { isMobile } from "react-device-detect";
import Typist from "react-typist";
import style from "../css/main.css";
import { useCountUp } from "react-countup";
import React, { useState, useEffect, useRef } from "react";
import fireworks1 from "../assets/svgs/animatedIcons/fireworks1.json";
import fireworks2 from "../assets/svgs/animatedIcons/fireworks2.json";
import fireworks3 from "../assets/svgs/animatedIcons/fireworks3.json";
import lottie from "lottie-web";

const Title = () => {
	const explode1 = () => {
		lottie.destroy("fireworks1");
		lottie.loadAnimation({
			container: document.querySelector("#fireworks1"),
			animationData: fireworks1,
			autoplay: true,
			loop: false,
			name: "fireworks1",
		});
	};
	const explode2 = () => {
		lottie.destroy("fireworks2");
		lottie.loadAnimation({
			container: document.querySelector("#fireworks2"),
			animationData: fireworks2,
			autoplay: true,
			loop: false,
			name: "fireworks2",
		});
	};

	const explode3 = () => {
		lottie.destroy("fireworks3");
		lottie.loadAnimation({
			container: document.querySelector("#fireworks3"),
			animationData: fireworks3,
			autoplay: true,
			loop: false,
			name: "fireworks3",
		});
	};

	React.useEffect(() => {
		setTimeout(() => explode1(), 2000);
		setTimeout(() => explode2(), 2500);
		setTimeout(() => explode3(), 3000);
	}, []);

	return (
		<div
			className="pt-5 md:pt-20 relative mb-5 flex flex-col md:flex-row mb-20"
			style={{ zIndex: 0 }}
		>
			<div
				className="w-full md:w-3/5 relative"
				style={{ minHeight: isMobile ? "auto" : "20vw", zIndex: 1 }}
			>
				<p className="text-3xl md:text-4xl lg:text-5xl lg:leading-normal text-orange my-10 ">
					<Typist cursor={{ hideWhenDone: true }}>
						<span>ACY PROTOCOL</span>
					</Typist>
				</p>
				<p className="text-justify text-xl w-100 xl:w-5/6 text-brown-100 my-10 leading-10">
					A decentralized crypto trading protocol enables the most profitable,
					fastest and protected operation.
				</p>
				<div
					className=""
					style={{
						position: "absolute",
						left: "300px",
						right: "0px",
						top: "0px",
						width: "250px",
					}}
					id="fireworks1"
				></div>
				<div
					className=""
					style={{
						position: "absolute",
						left: "425px",
						right: 0,
						top: "0px",
						width: "250px",
					}}
					id="fireworks2"
				></div>
				<div
					className=""
					style={{
						position: "absolute",
						left: "550px",
						right: 0,
						top: "0px",
						width: "250px",
					}}
					id="fireworks3"
				></div>
			</div>
		</div>
	);
};

export default Title;
