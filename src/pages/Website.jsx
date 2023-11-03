import React from "react";
import Main from "../components/section/Main";
import VideoSlider from "../components/video/VideoSlider";
import { websiteText } from "../data/website";

const Website = () => {
  return (
    <Main
      title="웹표준 사이트"
      description="웹표준 사이트 튜토리얼 강의입니다."
    >
      <VideoSlider
        videos={websiteText}
        title="😛 웹표준 사이트 만들기 기초 다지기"
        id="website"
      />
    </Main>
  );
};

export default Website;
