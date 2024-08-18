import React from "react";

import wallet from "../../assets/icons/wallet.png";
import remote from "../../assets/icons/remote.png";
import tonkeeper from "../../assets/icons/tonkeeper.png";

import "../JobsList/JobsList.scss";

const CurrentJobs = () => {
  return (
    <div className="jobs">
      <h1 className="jobs__title">Current applications</h1>
      <div className="jobs__list">
        <div className="jobs__item">
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
        </div>
        <div className="jobs__item">
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
        </div>
        <div className="jobs__item">
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
        </div>
      </div>
    </div>
  );
};

export default CurrentJobs;
