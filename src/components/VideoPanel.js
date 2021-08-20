import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import placeholder from "../assets/default.png";

export const VideoPanel = () => {
  let [webGLStatus, setWebGLStatus] = useState(true);
  useEffect(() => {
    let supportedXtensionList = document
      .createElement("canvas")
      .getContext("experimental-webgl")
      .getSupportedExtensions();

    let mustHaves = ["OES_texture_float_linear"];
    for (let mustHave of mustHaves) {
      if (supportedXtensionList.indexOf(mustHave) === -1) {
        setWebGLStatus(false);
        break;
      }
    }
  }, []);
  return (
    <div className="rounded-xl my-4">
      <div className="flex flex-col items-center">
        {webGLStatus ? (
          <iframe
            style={{
              width: "100%",
              height: "100vh",
              maxHeight: isMobile ? "700px" : "1000px",
            }}
            className="rounded-xl"
            src="https://api.acy.finance/app.html"
            title="ACY"
            frameBorder="0"
          ></iframe>
        ) : (
          <img alt="default" src={placeholder} className="w-full" />
        )}

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
