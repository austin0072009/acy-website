import { VideoDescription, Video } from ".";

export const VideoPanel = () => {
  return (
    <div className="bg-brown-200 rounded-md my-4 p-5 lg:p-20">
      <div className="flex flex-col items-center">
        <iframe
          style={{
            width: "100%",
            height: "40vh",
          }}
          className="rounded-md"
          src="http://axure.vapp.cn/acy/app.html"
          title="ACY"
        ></iframe>
        <div
          style={{
            width: "100%",
          }}
        >
          <VideoDescription></VideoDescription>
        </div>
      </div>
    </div>
  );
};

export default VideoPanel;
