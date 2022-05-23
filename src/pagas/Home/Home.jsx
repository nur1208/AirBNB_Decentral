import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

import {
  ConnectButton,
  Icon,
  Select,
  DatePicker,
  Input,
  Button,
} from "web3uikit";
import { useNotification } from "../../components/Notification";
import colors from "../../styles/colors";
export const Home = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(2);
  const dispatch = useNotification();

  const handleSuccess = () => {
    dispatch({
      type: "success",
      message: `Nice! You are going to !!`,
      title: "Booking Successfully",
      position: "topL",
      iconColor: colors.green,
    });
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage: `url(./images/frontpagebg.png)`,
        }}
      >
        <div className="containerGradinet"></div>
      </div>
      <div className="topBanner">
        <div>
          <img
            className="logo"
            src="./images/airbnb.png"
            alt="logo"
          ></img>
        </div>
        <div className="tabs">
          <div className="selected">Places To Stay</div>
          <div onClick={() => handleSuccess()}>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className="lrContainers">
          {/* <ConnectButton /> */}
        </div>
      </div>
      {/* Home <img src="./images/frontpagebg.png" alt="" /> */}
    </>
  );
};
