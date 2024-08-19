import React from "react";

import wallet from "../../assets/icons/wallet.png";
import remote from "../../assets/icons/remote.png";
import tonkeeper from "../../assets/icons/tonkeeper.png";

import "../../animations/animations.css";
import "./JobsList.scss";

const JobsList = () => {
  return (
    <div className="jobs">
      <h1 className="jobs__title">New Jobs</h1>
      <div className="jobs__list">
        <Link className="jobs__item LeftToRightFast" to={"/job/123"}>
          <img className="jobs__item-img" src={wallet} alt="" />
          <div className="jobs__item-content">
            <span className="jobs__item-name">Customer Support Specialist</span>
            <span className="jobs__item-text">Wallet</span>
            <span className="jobs__item-text">Remote</span>
          </div>
          <div className="jobs__item-content">
            <button className="jobs__item-like">
              <img
                src="https://img.icons8.com/?size=100&id=T6lIeZJi54CY&format=png&color=000000"
                alt=""
              />
            </button>
            <span className="jobs__item-date">2h ago</span>
          </div>
        </Link>
        <Link className="jobs__item LeftToRightMedium" to={"/job/123"}>
          <img className="jobs__item-img" src={remote} alt="" />
          <div className="jobs__item-content">
            <span className="jobs__item-name">Customer Support Specialist</span>
            <span className="jobs__item-text">Wallet</span>
            <span className="jobs__item-text">Remote</span>
          </div>
          <div className="jobs__item-content">
            <button className="jobs__item-like">
              <img
                src="https://img.icons8.com/?size=100&id=T6lIeZJi54CY&format=png&color=000000"
                alt=""
              />
            </button>
            <span className="jobs__item-date">2h ago</span>
          </div>
        </Link>
        <Link className="jobs__item LeftToRightSlow" to={"/job/123"}>
          <img className="jobs__item-img" src={tonkeeper} alt="" />
          <div className="jobs__item-content">
            <span className="jobs__item-name">Customer Support Specialist</span>
            <span className="jobs__item-text">Wallet</span>
            <span className="jobs__item-text">Remote</span>
          </div>
          <div className="jobs__item-content">
            <button className="jobs__item-like">
              <img
                src="https://img.icons8.com/?size=100&id=T6lIeZJi54CY&format=png&color=000000"
                alt=""
              />
            </button>
            <span className="jobs__item-date">2h ago</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JobsList;
