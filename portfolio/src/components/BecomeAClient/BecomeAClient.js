import React, { useEffect } from "react";
import "./BecomeAClient.css";
import gsap from "gsap";

const BecomeAClient = () => {
 
  useEffect(() => {
    function page2Animation() {
      let rightElems = document.querySelectorAll(".right-elem");

      rightElems.forEach(function (elem) {
        const img = elem.querySelector("img");

        elem.addEventListener("mouseenter", function () {
          gsap.to(img, {
            opacity: 1,
            scale: 1,
          });
        });
        elem.addEventListener("mouseleave", function () {
          gsap.to(img, {
            opacity: 0,
            scale: 0,
          });
        });
        elem.addEventListener("mousemove", function (event) {
          const rect = elem.getBoundingClientRect();
          gsap.to(img, {
            x: event.clientX - rect.left - 90,
            y: event.clientY - rect.top - 215,
          });
        });
      });
    }

    page2Animation();
  }, []);

  return (
    <div id="page2">
      <div id="page2-left">
        <p>
          Exclusive insights into <br />
          UI/UX and product design
        </p>
        <h5>
          Being a design studio at the forefront of digital transformation and
          product design, we take it upon ourselves to drop some knowledge,
          share insights, let out insider tips, and put our work on full display
        </h5>
      </div>
      <div id="page2-right">
        <div class="right-elem" id="right-elem1">
          <h2>
            How to Design An AI InterFace Users will <br />
            Trust in 2024?
          </h2>
          <img
            src="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp"
            alt=""
          />
        </div>
        <div class="right-elem">
          <h2>
            How to Design An AI InterFace Users will <br />
            Trust in 2024?
          </h2>
          <img
            src="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp"
            alt=""
          />
        </div>
        <div class="right-elem">
          <h2>
            How to Design An AI InterFace Users will <br />
            Trust in 2024?
          </h2>
          <img
            src="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp"
            alt=""
          />
        </div>
        <div class="right-elem">
          <h2>
            How to Design An AI InterFace Users will <br />
            Trust in 2024?
          </h2>
          <img
            src="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeAClient;
