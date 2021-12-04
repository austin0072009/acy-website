import { ACYLink } from "../atoms";

const FooterNavigation = () => {
	return (
		<div className=" w-full lg:w-auto flex flex-col container">
			<div className="flex flex-row justify-between mb-1">
				<ACYLink url="/about-us" main={true}>
					ABOUT
				</ACYLink>
				<ACYLink url="/ecosystem" main={true}>
					ECOSYSTEM
				</ACYLink>
				<ACYLink url="/governance" main={true}>
					GOVERNANCE
				</ACYLink>
				<ACYLink url="/acy-token" main={true}>
					ACYTOKEN
				</ACYLink>
			</div>
			<div className="flex flex-row justify-end space-x-14 mb-1">
				<ACYLink url="/terms-of-use" main={true}>
					TERMS
				</ACYLink>
				<ACYLink url="/privacy-policy" main={true}>
					PRIVACY
				</ACYLink>
				<ACYLink url="/cookie-policy" main={true}>
					COOKIE
				</ACYLink>
			</div>
			<span className="text-right py-2" style={{ color: "#B5B6B6" }}>
				&copy; 2021 ACY Finance
			</span>
		</div>
	);
};

export default FooterNavigation;
