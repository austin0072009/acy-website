const Gradient = () => {
  return (
    <div>
      <div
        className="fixed w-full h-full top-0 left-0"
        style={{
          background:
            "radial-gradient(50% 50% at top 20% right 20%, #ea5c1f, #1B1B1C)",
          zIndex: -1,
          opacity: 0.15,
        }}
      ></div>
      <div
        className="fixed w-full h-full top-0 left-0"
        style={{
          background:
            "radial-gradient(30% 30% at bottom 10% left 5%, #ffde7a, #1B1B1C)",
          zIndex: -1,
          opacity: 0.05,
        }}
      ></div>
      <div
        className="fixed w-full h-full top-0 left-0"
        style={{
          background:
            "radial-gradient(70% 70% at bottom 30% right 5%, #07090e, #1B1B1C)",
          zIndex: -1,
          opacity: 0.3,
        }}
      ></div>
    </div>
  );
};

export default Gradient;
