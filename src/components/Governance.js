import arrowBullet from "../assets/arrow_bullet.png";

const Governance = () => {
  return (
    <div>
      <div className="flex items-center text-gray-100 mb-3">
        <img
          src={arrowBullet}
          style={{ maxWidth: 40 }}
          alt="arrow"
          className="mr-3"
        />
        <span className="text-2xl font-medium">GOVERNANCE</span>
      </div>
    </div>
  );
};

export default Governance;
