import React from "react";
import Main from "../components/section/Main";
import { youtubeText } from "../data/youtube";
import VideoSlider from "../components/video/VideoSlider";

const Youtube = () => {
  return (
    <Main
      title="유튜브 사이트"
      description="유튜브 사이트 튜토리얼 강의입니다."
    >
      <VideoSlider
        videos={youtubeText}
        title="😱 지금 이 코딩을 영상으로"
        id="youtube"
      />
    </Main>
  );
};

export default Youtube;
