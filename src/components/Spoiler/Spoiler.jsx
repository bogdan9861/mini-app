import React, { useEffect, useRef, useState } from "react";

import "./Spoiler.scss";

const Spoiler = ({ secureText, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cvs = useRef();

  useEffect(() => {
    let ctx = cvs.current.getContext("2d");
    
    let times = 0;

    requestAnimationFrame(function animate(time) {
      times++;
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = "#A5A5A5";

        let rndX = Math.floor(Math.random() * 100);
        let rndY = Math.floor(Math.random() * 20);

        ctx.fillRect(rndX, rndY, 2, 2);

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
