export const VideoPanel = () => {
  return (
    <div className="rounded-md my-4">
      <div className="flex flex-col items-center">
        <iframe
          style={{
            width: "100%",
            height: "80vh",
          }}
          className="rounded-md"
          src="http://localhost:3001/app.html"
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
