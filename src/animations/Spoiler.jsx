import React, { useEffect, useRef, useState } from "react";

const Spoiler = ({ secureText }) => {
  const cvs = useRef();

  useEffect(() => {
    let ctx = cvs.current.getContext("2d");

    const draw = setInterval(() => {
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = "#A5A5A5";

        let rndX = Math.floor(Math.random() * 100);
        let rndY = Math.floor(Math.random() * 20);

        ctx.fillRect(rndX, rndY, 2, 2);

        setInterval(() => {
          ctx.clearRect(rndX, rndY, 2, 2);
        }, 30);
      }
    }, 10);

    return () => {
      clearInterval(draw);
    };
  }, []);

  return <canvas width="100px" height="20px" ref={cvs}></canvas>;
};

export default Spoiler;
