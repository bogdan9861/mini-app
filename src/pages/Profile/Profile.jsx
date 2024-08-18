import React from "react";
import { useParams } from "react-router-dom";
import CurrentJobs from "../../components/CurrentJobs/CurrentJobs";
import { useTelegram } from "../../hooks/useTelegram";

import profile from "../../assets/images/profile.png";

import "./Profile.scss";

const Profile = () => {
  const { user, tg } = useTelegram();

  return (
    <div className="profile container">
      <div className="profile__inner">
        <img className="profile__img" src={profile} alt="" />
        <div className="profile__content">
          <span className="profile__content-name">
            {user?.first_name || "Jane"}
          </span>
          <span className="profile__content-text">QA Engineer</span>
        </div>
        <img
          className="profile__edit"
          src="https://img.icons8.com/?size=100&id=VMo8ScDaJ5lL&format=png&color=C9D1DF"
          alt=""
        />
      </div>
      <div className="profile__tags">
        <div className="profile__tag">
          <span className="profile__tag-text">USA</span>
        </div>
        <div className="profile__tag">
          <span className="profile__tag-text">Full-Time</span>
        </div>
      </div>
      <CurrentJobs />
    </div>
  );
};

export default Profile;
