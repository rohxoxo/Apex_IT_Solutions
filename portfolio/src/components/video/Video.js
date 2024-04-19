import React, {useEffect} from "react";
import "./Video.css";
import { RiPlayFill } from "react-icons/ri";
import { gsap } from "gsap";


const Video = () => {
  useEffect(() => {
    function page3VideoAnimation() {
      var page3Center = document.querySelector(".page3-center");
      var video = document.querySelector("#page3 video");

      page3Center.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
          transform: "scaleX(1) scaleY(1)",
          opacity: 1,
          borderRadius: 0
        });
      });
      video.addEventListener("click", function () {
        video.pause();
        gsap.to(video, {
          transform: "scaleX(0.7) scaleY(0)",
          opacity: 0,
          borderRadius: "30px"
        });
      });
    }

    page3VideoAnimation();

  }, []);
  
  return (
    <div id="page3">
      <video src="https://lazarev.kiev.ua/la24/la-reel--min.mp4"></video>
      <div class="page3-center">
        <div class="icon">
          <RiPlayFill size={32} />
        </div>
        <h5>Watch Showreel</h5>
      </div>
    </div>
  );
};

export default Video;
