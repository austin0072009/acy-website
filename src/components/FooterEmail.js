import submit from "../assets/svgs/footer/arrow_submit.svg";
import hsubmit from "../assets/svgs/footer/arrow_submit_hover.svg";
import styled from "styled-components";
import style from "../css/animation.css";
import { useState, useCallback } from "react";
import axios from "axios";

const StyledInputName = styled.input`
	font-size: 20px;
	background-color: inherit;
	color: white;
	width: 80%;
	border-width: 1px;
	line-height: 50px;
	border-right: 0px solid transparent;
	border-top: 0px solid transparent;
	border-left: 0px solid transparent;
	&:focus {
		outline-width: 0;
		filter: brightness(2);
	}
`;

const StyledInputEmail = styled.input`
	font-size: 20px;
	background-color: inherit;
	color: white;
	width: 100%;
	border-width: 1px;
	line-height: 50px;
	border-right: 0px solid transparent;
	border-top: 0px solid transparent;
	border-left: 0px solid transparent;
	&:focus {
		outline-width: 0;
		filter: brightness(2);
	}
`;

const FooterEmail = () => {
	let [active, setActive] = useState(false);
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [hasError, setHasError] = useState(false);
	let [errorMsg, setErrorMsg] = useState("An error occured");
	let [success, setSuccess] = useState(false);

	let subscribe = useCallback(() => {
		setHasError(false);
		console.log("Subscribe!");
		if (!name.length || !email.length) {
			setHasError(true);
			setErrorMsg("Fields cannot be empty");
			return;
		}
		axios
			.post("/api/subscribe/add", {
				name,
				email,
			})
			.then(res => {
				setHasError(false);
				setSuccess(true);
			})
			.catch(e => {
				setHasError(true);
				setErrorMsg(e.response.data || "Error");
			});
	}, [name, email]);

	return (
		<div className="flex-col w-full">
			{success ? (
				<span className="text-gray-50">🎉 Thank you for signing up!</span>
			) : (
				<div className="flex flex-row gap-x-3 items-center justify-start">
					<div className="flex flex-col">
						<div className="flex flex-col sm:flex-row mr-5">
							<div>
								<StyledInputName
									value={name}
									required={true}
									placeholder="Name"
									onChange={e => {
										setName(e.target.value);
									}}
								></StyledInputName>
							</div>
							<div>
								<StyledInputEmail
									required={true}
									placeholder="Email Address"
									value={email}
									onChange={e => {
										setEmail(e.target.value);
									}}
								></StyledInputEmail>
							</div>
						</div>
						{hasError && <small class="text-red-600">{errorMsg}</small>}
					</div>
					<div
						onMouseEnter={() => {
							setActive(true);
						}}
						onMouseLeave={() => {
							setActive(false);
						}}
					>
						<img
							src={active ? hsubmit : submit}
							alt="submit"
							className="moveLROnClick cursor-pointer"
							style={{ minWidth: 40, maxWidth: 40 }}
							onClick={subscribe}
						/>
					</div>
				</div>
			)}
			<div className="my-4" style={{ color: "#757579" }}>
				Subscribe for project and ecosystem updates
			</div>
		</div>
	);
};

export default FooterEmail;
