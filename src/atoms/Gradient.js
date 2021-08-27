const Gradient = () => {
  return (
    <div
      className="fixed w-full h-full top-0 left-0"
      style={{
        background:
          "radial-gradient(circle at top left, #1B1B1C 0%, #1B1B1C 100%) top left,radial-gradient(circle at bottom right, #ea5c1f 0%, rgb(15, 16, 19) 50%) bottom right",
        zIndex: -1,
        opacity: 0.12,
      }}
    ></div>
  );
};

export default Gradient;
