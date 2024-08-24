import React, { useEffect, useRef, useState } from "react";

import "./Spoiler.scss";

const Spoiler = ({ secureText, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cvs = useRef();

  useEffect(() => {
    let width = 100;
    let height = 20;
    let ctx = cvs.current.getContext("2d");
    ctx.fillStyle = "#A5A5A5";

    let times = 0;

    let positions = [];

    for (let i = 0; i < 20; i++) {
      let ranX = Math.floor(Math.random() * width);
      let randY = Math.floor(Math.random() * height);

      positions.push({ x: ranX, y: randY, index: i });
      ctx.fillRect(positions[i].x, positions[i].y, 2, 2);
    }

    requestAnimationFrame(function animate(time) {
      times++;

      for (let i = 0; i < 20; i++) {
        if (i === positions[i].index) {
          let nextStepX;
          let nextStepY;

          if (positions[i].x <= width && positions[i].x > 0) {
            nextStepX = Math.floor(Math.random() * 2 - 1);
          } else {
            nextStepX = width - 2;
          }

          if (positions[i].y >= 0) {
            nextStepY = Math.floor(Math.random() * 2 - 1);
          } else {
            nextStepY = height - 2;
          }

          positions[i] = {
            x: positions[i].x + nextStepX,
            y: positions[i].y + nextStepY,
            index: i,
          };
          ctx.fillRect(positions[i].x + 1, positions[i].y + 1, 2, 2);
        }

        if (times > 1) {
          times = 0;
          ctx.clearRect(0, 0, 100, 20);
        }
      }

      if (!isOpen) {
        requestAnimationFrame(animate);
      }
    });
  }, []);

  return (
    <div style={{ position: "relative" }} {...props}>
      <canvas
        onClick={() => setIsOpen(true)}
        className={`canvas ${isOpen ? "hide" : ""}`}
        width="100px"
        height="20px"
        ref={cvs}
      ></canvas>
      <span className={`secure_text ${isOpen ? "show" : "hide"}`}>
        {secureText}
      </span>
    </div>
  );
};

export default Spoiler;
