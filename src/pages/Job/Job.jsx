import React from "react";
import { Link } from "react-router-dom";

import tonkeeper from "../../assets/icons/tonkeeper.png";
import "../Profile/Profile.scss";
import "./Job.scss";
import Spoiler from "../../animations/Spoiler";

const Job = () => {
  return (
    <div className="job container">
      <div className="job__head">
        <img className="job__head-img" src={tonkeeper} alt="" />
        <div className="job__head-content">
          <span className="job__head-title">QA Engineer</span>
          <span className="job__head-subtitle">Tonkeeper</span>
          <span className="job__head-date">Posted on June 18</span>
        </div>
        <button className="jobs__item-like">
          <img
            src="https://img.icons8.com/?size=100&id=T6lIeZJi54CY&format=png&color=000000"
            alt=""
          />
        </button>
      </div>
      <div className="profile__tags" style={{ marginBottom: "15px" }}>
        <div className="profile__tag">
          <span className="profile__tag-text">USA</span>
        </div>
        <div className="profile__tag">
          <span className="profile__tag-text">Full-Time</span>
        </div>
        <div className="profile__tag">
          <span className="profile__tag-text">Full-Time</span>
        </div>
        <div className="profile__tag">
          <span className="profile__tag-text">Full-Time</span>
        </div>
        <div className="profile__tag">
          <span className="profile__tag-text">Full-Time</span>
        </div>
        <div className="profile__tag">
          <span className="profile__tag-text">Full-Time</span>
        </div>
      </div>
      <p className="job__description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        hic, explicabo sed iure corporis optio laboriosam modi?
      </p>
      <span className="job__salary-text">Salary</span>
      <span className="job__salary-value">$500</span>
      <Spoiler />

      <button className="job__btn">Apply</button>
      <div className="job__more">
        <div className="job__more-header">
          <span className="job__more-title">More positions</span>
          <Link className="link">See all</Link>
        </div>
        <div className="job__more-body">
          <div className="job__more-content">
            <span className="job__more-text">Video production lead</span>
            <span className="job__more-subtext">Full-time</span>
          </div>
          <img
            className="job__more-img"
            src="https://img.icons8.com/?size=100&id=14906&format=png&color=000000"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Job;
