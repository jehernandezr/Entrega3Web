import { ProfileComponent } from "../../components/Profile/ProfileComponent";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { API } from "../../utils/apiURI";
import "./Profile.scss"
export const Profile = () => {
  const [state, setState] = useState({ user: {} });

  useEffect(() => {
    const url = API + "/users/getMe";
    fetch(url, {
      method: 'GET',
      headers: {
        "Authorization": "Bearer "+ Cookies.get('jwt'),
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((usr) => {
        const user = usr.data.data;
        setState({ user });
      });
  }, []);

  /* display flex row wrap en scss*/
  return (
    <div className="main-bg-login ">
      <div className="row">
        <ProfileComponent user={state.user}></ProfileComponent>
      </div>
    </div>
  );
};
