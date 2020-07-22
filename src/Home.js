import React from "react";
import bush_small from "./assets/bush_small.png";
import tree1 from "./assets/tree1.png";
import tree2 from "./assets/tree2.png";
import tree from "./assets/trees.png";
import horse from "./assets/horse.gif";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Home = () => {
  const { ref, getAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translate(-100%,0)" },
      { transform: "translate(100%,0)" },
    ],
    timing: {
      duration: 5000,
      iterations: Infinity,
    },
  });

  return (
    <div className="container">
      <div ref={ref} className="trees">
        <img alt="imagees" src={tree1} />
        <img alt="imagess" src={bush_small} className="bush" />

        <img alt="imagess" src={tree2} />
        <img alt="imagess" src={bush_small} className="bush" />

        <img alt="imagess" src={tree} />
        <img alt="imagess" src={tree2} />
      </div>

      <div>
        <button
          onClick={() => {
            const animation = getAnimation();

            animation.updatePlaybackRate(animation.playbackRate * 1.25);
          }}
        >
          <img
            alt="imagse"
            style={{
              position: "absolute",
              bottom: "0",
              left: "50%",
              width: "500px",
            }}
            src={horse}
          />
        </button>
      </div>
    </div>
  );
};
