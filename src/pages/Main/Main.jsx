import React, { useEffect } from "react";
import InfoIndicator from "../../components/InfoIndicator/InfoIndicator.tsx";
import { Link } from "react-router-dom";

import JobsList from "../../components/JobsList/JobsList.jsx";
import { useTelegram } from "../../hooks/useTelegram.js";

import "./Main.scss";

const Main = () => {
  const { isReady } = useTelegram();

  useEffect(() => {
    isReady();
  }, []);

  return (
    <div className="main container">
      <div className="main__head">
        <span className="main__head-title">Find your job</span>
        <Link className="main__head-link">See all</Link>
      </div>
      <div className="main__indicators">
        <InfoIndicator
          className="scaleInFast"
          backgroundColor="yellow"
          description="Remote jobs"
          amount="50.9k"
          size="large"
        />
        <div className="main__smal-indicators">
          <InfoIndicator
            className="scaleInMedium"
            backgroundColor="black"
            description="Full-Time"
            amount="50.9k"
            size="small"
          />
          <InfoIndicator
            className="scaleInSlow"
            backgroundColor="grey"
            description="Part-Time"
            amount="50.9k"
            size="small"
          />
        </div>
      </div>
      <JobsList />
    </div>
  );
};

export default Main;
