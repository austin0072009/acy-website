import { ACYLink } from "../atoms";

const FooterNavigation = () => {
	return (
		<div className="p-2 w-full lg:w-auto flex flex-col container">
			<div className="flex flex-row justify-between">
				<ACYLink url="/about-us">ABOUT</ACYLink>
				<ACYLink url="/ecosystem">ECOSYSTEM</ACYLink>
				<ACYLink url="/governance">GOVERNANCE</ACYLink>
				<ACYLink url="/acy-token">ACYTOKEN</ACYLink>
			</div>
			<div className="flex flex-row justify-end space-x-16">
				<div></div>
				<ACYLink url="/terms-of-use">TERMS</ACYLink>
				<ACYLink url="/privacy-policy">PRIVACY</ACYLink>
				<ACYLink url="/cookie-policy">COOKIE</ACYLink>
			</div>
			<p className="text-right" style={{ color: "#c9d2d8" }}>
				&copy; 2021 ACY Finance
			</p>
		</div>
	);
};

export default FooterNavigation;
