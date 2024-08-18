import React from "react";
import { useParams } from "react-router-dom";
import CurrentJobs from "../../components/CurrentJobs/CurrentJobs";

const Profile = () => {
  const tg = window.Telegram.WebApp;

  return (
    <div className="profile container">
      <div className="profile__inner">
        <img className="profile__img" src={tg.initDataUnsafe?.user?.photo_url} alt="" />
        <div className="profile__content">
          <span className="profile__content-name">
            {tg.initDataUnsafe?.user?.first_name}
          </span>
          <span className="profile__content-name">QA Engineer</span>
        </div>
        <img
          src="https://img.icons8.com/?size=100&id=VMo8ScDaJ5lL&format=png&color=C9D1DF"
          alt=""
        />
      </div>
      <CurrentJobs />
    </div>
  );
};

export default Profile;
