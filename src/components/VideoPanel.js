export const VideoPanel = () => {
  return (
    <div className="rounded-xl my-4">
      <div className="flex flex-col items-center">
        <iframe
          style={{
            width: "100%",
            height: "100vh",
          }}
          className="rounded-xl"
          src="https://api.acy.finance/app.html"
          title="ACY"
          frameBorder="0"
        ></iframe>
        <div
          style={{
            width: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default VideoPanel;
