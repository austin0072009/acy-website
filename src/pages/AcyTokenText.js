import { useMemo } from "react";
import { TopicText } from "../components";
import { isMobile } from "react-device-detect";
const WhatIsACY = () => {
  console.log(isMobile);
  let data = useMemo(() => []);
  return (
    <div className="pl-0 md:pl-5">
      {data.map((item) => (
        <TopicText
          title={item.title}
          paragraphs={item.paragraphs}
          bulletType={item.bulletType}
        />
      ))}

      {!isMobile && <div style={{ height: 500 }}></div>}
    </div>
  );
};

export default AcyTokenText;
