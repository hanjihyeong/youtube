import React from "react";
import Main from "../components/section/Main";
import VideoSlider from "../components/video/VideoSlider";
import { gsapText } from "../data/gsap";

const Gsap = () => {
  return (
    <Main title="GSAP 사이트" description="GSAP 사이트 튜토리얼 강의입니다.">
      <VideoSlider
        videos={gsapText}
        title="🤓 GSAP 패럴랙스 효과를 하고 싶다면!"
        id="gsap"
      />
    </Main>
  );
};

export default Gsap;
