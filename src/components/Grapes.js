import React from "react";
import "./Investor.css";
import "./DualSlidingPanel.css";
import { useEffect } from "react";

const Grapes = () => {
	useEffect(() => {
		document.body.addEventListener("touchend", nextGeneration);

		const grape = document.querySelector(".Grape");
		const fruits = document.querySelector(".Fruits");

		grape.addEventListener("click", nextGeneration);

		const numbers = [];

		const coinTag = [
			"BTC",
			"ETH",
			"BNB",
			"USDT",
			"SOL",
			"ADA",
			"USDC",
			"XRP",
			"DOT",
			"LUNA",
			"DOGE",
			"AVAX",
			"SHIB",
			"LTC",
			"UNI",
			"TRX",
		];

		function nextGeneration() {
			let lastGen = numbers[numbers.length - 1] || [];
			let newGen = [];

			const row = document.createElement("div");
			row.classList.add("Row");

			let randomCoin = 0;

			for (let i = 0; i < lastGen.length + 1; i++) {
				let number = (lastGen[i - 1] || 0) + (lastGen[i] || 0) || 1;
				newGen.push(number);

				let fruit = document.createElement("div");
				fruit.classList.add("Fruit");
				randomCoin = Math.floor(Math.random() * coinTag.length);
				fruit.innerText = coinTag[randomCoin];
				fruit.style.setProperty("--digits", number.toString().length);
				fruit.style.setProperty("--variant", Math.random());
				let delay = Math.floor(Math.abs(i - lastGen.length * 0.5));
				fruit.style.setProperty("--delay", delay);
				fruit.style.setProperty(
					"--zindex",
					1000 * numbers.length + 100 - delay
				);
				row.append(fruit);
			}
			numbers.push(newGen);
			if (fruits.childElementCount < 7) {
				fruits.append(row);
				grape.style.setProperty("--layers", numbers.length);
			} else {
			}
		}

		let timer = setInterval(() => {
			if (numbers.length >= 2) {
				timer && clearInterval(timer);
			}
			nextGeneration();
		}, 750);

		nextGeneration();
	}, []);
	return (
		<div className="grapes video-animation-container">
			<figure class="Grape">
				<figcaption class="Leaves">
					<div class="Leaf"></div>
					<div class="Leaf"></div>
				</figcaption>
				<div class="Fruits"></div>
			</figure>
		</div>
	);
};

export default Grapes;
