import { FooterNavigation, FooterEmail } from ".";

const Footer = () => {
  return (
    <div
      className="px-4 sm:px-10 xl:px-20 lg:px-18 overflow-hidden"
      style={{ borderTop: "1px solid #615e63" }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center py-10 ">
        <FooterEmail></FooterEmail>
        <FooterNavigation></FooterNavigation>
      </div>
    </div>
  );
};

export default Footer;
