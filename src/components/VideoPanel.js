import { VideoDescription, Video } from ".";

export const VideoPanel = () => {
  return (
    <div className="bg-brown-200 rounded-md my-4">
      <div className="flex flex-col items-center py-10">
        <iframe
          style={{
            width: "60vw",
            height: "40vw",
          }}
          className="rounded-md"
          src="https://www.youtube.com/embed/MhwrQpXQq4I"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div
          style={{
            width: "60vw",
          }}
        >
          <VideoDescription></VideoDescription>
        </div>
      </div>
    </div>
  );
};

export default VideoPanel;
