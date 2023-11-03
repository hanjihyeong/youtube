import React from "react";
import Main from "../components/section/Main";
import VideoSlider from "../components/video/VideoSlider";
import { webdText } from "../data/webd";

const Webd = () => {
  return (
    <Main
      title="웹디자인 기능사"
      description="웹디자인 기능사 튜토리얼 강의입니다."
    >
      <VideoSlider
        videos={webdText}
        title="😮 웹디자인기능사 준비는 이걸로!"
        id="web"
      />
    </Main>
  );
};

export default Webd;
