import { FooterNavigation, FooterEmail } from ".";

const Footer = () => {
  return (
    <div
      className="px-4 sm:px-10 xl:px-20 lg:px-18 overflow-hidden relative"
      style={{
        backgroundColor: "#1B1B1C",
        zIndex: 1,
      }}
    >
      <div
        className="flex flex-col lg:flex-row justify-between items-center py-10 relative"
        style={{ zindex: 2 }}
      >
        <FooterEmail></FooterEmail>
        <FooterNavigation></FooterNavigation>
      </div>
    </div>
  );
};

export default Footer;
