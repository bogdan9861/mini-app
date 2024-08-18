import React, { useState } from "react";

import "../../animations/animations.css";
import "./InfoIndicator.scss";

type InfoIndicatorType = {
  backgroundColor: "yellow" | "black" | "grey";
  size: "large" | "small";
  description: string;
  amount: string;
  className: string;
};

const InfoIndicator = ({
  backgroundColor,
  description,
  size,
  amount,
  className,
}: InfoIndicatorType) => {
  const colorScheme = backgroundColor != "black" ? "#040404" : "#F0F0F0";

  const colors = {
    yellow: "#D0FF00",
    black: "#272820",
    grey: "#E1DFE4",
  };

  const sizes = {
    small: {
      width: "100%",
      heigth: "50%",
    },

    large: {
      width: "100%",
      heigth: "100%",
    },
  };

  return (
    <div
      className={`indicator ${className}`}
      style={{
        background: colors[backgroundColor],
        width: sizes[size].width,
        height: sizes[size].heigth,
        color: colorScheme,
      }}
    >
      <img
        className="indicator__img"
        src={`https://img.icons8.com/?size=100&id=14906&format=png&color=${colorScheme.replace(
          "#",
          ""
        )}`}
        alt=""
      />
      <div className="indicator__content">
        <span className="indicator__content-desc">{description}</span>
        <span className="indicator__content-amount">{amount}</span>
      </div>
    </div>
  );
};

export default InfoIndicator;
