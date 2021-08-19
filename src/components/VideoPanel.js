import { isMobile } from "react-device-detect";
export const VideoPanel = () => {
  return (
    <div className="rounded-xl my-4">
      <div className="flex flex-col items-center">
        <iframe
          style={{
            width: "100%",
            height: "100vh",
            maxHeight: isMobile ? "700px" : "1000px",
          }}
          className="rounded-xl"
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
