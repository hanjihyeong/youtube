import React from "react";
import Main from "../components/section/Main";
import VideoSlider from "../components/video/VideoSlider";
import { portfolioText } from "../data/portfolio";

const Port = () => {
  return (
    <Main
      title="포트폴리오 사이트"
      description="포트폴리오 사이트 튜토리얼 강의입니다."
    >
      <VideoSlider
        videos={portfolioText}
        title="🤗 포트폴리오 만드는 방법을 공유합니다."
        id="portfolio"
      />
    </Main>
  );
};

export default Port;
