import React, { useEffect, useRef } from "react";
import "./Navbar.scss";
import { gsap } from "gsap";

export default function NavBar() {
  const navRef = useRef(null);

  function navAnimation() {
    const handleMouseEnter = () => {
      if (navRef.current) {
        let tl = gsap.timeline();
        tl.to(navRef.current, {
          height: "27vh",
        })
          .to(navRef.current.querySelectorAll("h5"), {
            display: "block",
          })
          .from(navRef.current.querySelectorAll("h5 span"), {
            y: 20,
            stagger: {
              amount: 0.6,
            },
          });
      }
    };

    const handleMouseLeave = () => {
      if (navRef.current) {
        let tl = gsap.timeline();
        tl.to(navRef.current.querySelectorAll("h5 span"), {
          y: 18,
          stagger: {
            amount: 0.1,
          },
          duration: 0.2,
        })
          .to(navRef.current.querySelectorAll("h5"), {
            display: "none",
            duration: 0.3,
          })
          .to(navRef.current, {
            height: "10vh",
            duration: 0.6,
          });
      }
    };

    const nav = document.querySelector("nav");

    navRef.current && nav.addEventListener("mouseenter", handleMouseEnter);
    navRef.current && nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      navRef.current && nav.removeEventListener("mouseenter", handleMouseEnter);
      navRef.current && nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }

  useEffect(() => {
    navAnimation();
  }, [navRef.current]);

  return (
    <nav ref={navRef} className="container">
      <h1>APEX_IT</h1>
      <div className="nav-part-2">
        <div className="nav-elem">
          <h4>Case Studies</h4>
        </div>
        <div className="nav-elem">
          <h4>Areas of experties</h4>
          <h5>
            <span>FinTech </span>
          </h5>
          <h5>
            <span>Real Estate </span>
          </h5>
          <h5>
            <span>E-commerce</span>
          </h5>
          <h5>
            <span>Restaurants</span>
          </h5>
          <h5>
            <span>Social Media</span>
          </h5>
        </div>
        <div className="nav-elem">
          <h4>UIUX Design</h4>
          <h5>
            <span>UI Design </span>
          </h5>
          <h5>
            <span>UX Design </span>
          </h5>
          <h5>
            <span>UX Research</span>
          </h5>
        </div>
        <div className="nav-elem">
          <h4>Product Design</h4>
          <h5>
            <span>Web App </span>
          </h5>
          <h5>
            <span>Mobile App </span>
          </h5>
          <h5>
            <span>Website Design</span>
          </h5>
        </div>
        <div className="nav-elem">
          <h4>Design Process</h4>
        </div>
        <div className="nav-elem">
          <h4>About Agency</h4>
        </div>
      </div>
      <button className="btn">
        Let's Talk{" "}
        <svg fill="none" viewBox="0 0 20 20">
          <path
            fill="#fff"
            d="M2.5 14.375V17.5h3.125l9.217-9.217-3.125-3.125L2.5 14.375Zm14.758-8.508a.83.83 0 0 0 0-1.175l-1.95-1.95a.83.83 0 0 0-1.175 0l-1.525 1.525 3.125 3.125 1.525-1.525Z"
          ></path>
        </svg>
      </button>
      <div id="navbottom-div" className="navbottom-div"></div>
    </nav>
  );
}
