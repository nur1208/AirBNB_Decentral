import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

// import {
//   ConnectButton,
//   Icon,
//   Select,
//   DatePicker,
//   Input,
//   Button,
// } from "web3uikit";
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
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            {/* <Select
              defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
              options={[
                {
                  id: "ny",
                  label: "New York",
                },
                {
                  id: "lon",
                  label: "London",
                },
                {
                  id: "db",
                  label: "Dubai",
                },
                {
                  id: "la",
                  label: "Los Angeles",
                },
              ]}
            /> */}
          </div>
          <div className="vl" />
          <div className="inputs">
            Check In
            {/* <DatePicker
              id="CheckIn"
              onChange={(event) => setCheckIn(event.date)}
            /> */}
          </div>
          <div className="vl" />
          <div className="inputs">
            Check Out
            {/* <DatePicker
              id="CheckOut"
              onChange={(event) => setCheckOut(event.date)}
            /> */}
          </div>
          <div className="vl" />
          <div className="inputs">
            Guests
            {/* <Input
              value={2}
              name="AddGuests"
              type="number"
              onChange={(event) =>
                setGuests(Number(event.target.value))
              }
            /> */}
          </div>
          <Link
            to={"/rentals"}
            state={{
              destination: destination,
              checkIn: checkIn,
              checkOut: checkOut,
              guests: guests,
            }}
          >
            <div className="searchButton">
              {/* <Icon fill="#ffffff" size={24} svg="search" /> */}
            </div>
          </Link>
        </div>
      </div>
      <div className="randomLocation">
        <div className="title">Feel Adventurous</div>
        <div className="text">
          Let us decide and discover new places to stay, live,
          work or just relax.
        </div>
        {/* <Button
          text="Explore A Location"
          onClick={() => console.log(checkOut)}
        /> */}
      </div>
    </>
  );
};
