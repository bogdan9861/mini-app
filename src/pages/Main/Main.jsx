import React from "react";
import InfoIndicator from "../../components/InfoIndicator/InfoIndicator.tsx";
import { Link } from "react-router-dom";

import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main__head">
        <span className="main__head-title">Find your job</span>
        <Link className="main__head-link">See all</Link>
      </div>
      <div className="main__indicators">
        <InfoIndicator
          backgroundColor="yellow"
          description="Remote jobs"
          amount="50.9k"
          size="large"
        />
        <div className="main__smal-indicators">
          <InfoIndicator
            backgroundColor="black"
            description="Full-Time"
            amount="50.9k"
            size="small"
          />
          <InfoIndicator
            backgroundColor="grey"
            description="Part-Time"
            amount="50.9k"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
