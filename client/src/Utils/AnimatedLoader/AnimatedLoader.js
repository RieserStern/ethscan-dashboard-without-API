import React, { useEffect } from "react";

import anime from "animejs";

const AnimatedLoader = () => {
  useEffect(() => {
    var pathEls = document.querySelectorAll("path");
    for (var i = 0; i < pathEls.length; i++) {
      var pathEl = pathEls[i];
      var offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute("stroke-dashoffset", offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 1500),
        delay: function (el, i) {
          return i * 250;
        },
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        autoplay: true,
      });
    }
  }, []);

  return (
    <div>
      <svg
        width="150"
        height="150"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 45L15.9645 13L30.5035 40.4033H31.2128L35.2908 32.4475L36 35.453L31.2128 43.9392H30.5035L16.8511 18.3039L12.9504 43.0553H17.7376L19.156 33.3315L20.3972 35.453L19.156 45H11Z"
          stroke="#E552FF"
          strokeWidth="0.8"
        />
        <path
          d="M16.6667 41.8571H15L17.6667 23L29 45H27L18.5 28.4127L16.6667 41.8571Z"
          stroke="#01D4FA"
          strokeWidth="0.8"
        />
        <path
          d="M18.7692 13H17L29.7385 37.967H30.4462L35.7538 27.7692L38.0538 45H40L36.4615 22.6703L30.4462 33.9231H29.7385L18.7692 13Z"
          stroke="
          #01D4FA
          "
          strokeWidth="0.8"
        />
        <path
          d="M31.0408 30.6796L30 28.9116L38.6735 13H42.3163L47 45H41.7959L38.1531 20.0718L39.7143 18.1271L43.3571 43.4088H44.9184L40.5816 14.5912H39.3673L31.0408 30.6796Z"
          stroke="#E552FF"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
};

export default AnimatedLoader;
