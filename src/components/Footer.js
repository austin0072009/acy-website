import { FooterNavigation, FooterEmail } from ".";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-10">
      <FooterEmail></FooterEmail>
      <FooterNavigation></FooterNavigation>
    </div>
  );
};

export default Footer;
