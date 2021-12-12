import { FooterNavigation, FooterEmail } from ".";

const Footer = () => {
	return (
		<div
			className="px-4 sm:px-10 xl:px-20 lg:px-18 overflow-hidden relative footer-text mb-20"
			style={{
				backgroundColor: "#0E0304",
				zIndex: 1,
			}}
		>
			<div
				className="flex flex-col lg:flex-row justify-between py-10 relative"
				style={{ zindex: 2 }}
			>
				<FooterEmail></FooterEmail>

				<FooterNavigation></FooterNavigation>
			</div>
		</div>
	);
};

export default Footer;
