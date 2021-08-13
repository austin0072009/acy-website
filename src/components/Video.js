const Video = () => {
  return (
    <div className="flex justify-center py-4">
      <iframe
        style={{
          width: "60vw",
          height: "40vw",
        }}
        className="rounded-md"
        src="https://www.youtube.com/embed/MhwrQpXQq4I"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
