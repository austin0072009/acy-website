export const VideoPanel = () => {
  return (
    <div className="rounded-md my-4">
      <div className="flex flex-col items-center">
        <iframe
          style={{
            width: "100%",
            height: "70vh",
          }}
          className="rounded-md"
          src="http://axure.vapp.cn/acy/app.html"
          title="ACY"
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
