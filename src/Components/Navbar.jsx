import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="main">
      <div className="left">
        <img src="/NavbarAssets/logo.png" alt="Company Logo" />
      </div>

      <div className="middle">
        <div className="overview items">
          <img src="/NavbarAssets/home.png" alt="" />
          <h4>Homepage</h4>
        </div>
        <div className="patients items special">
          <img src="/NavbarAssets/group.png" alt="" />
          <h4>Patients</h4>
        </div>
        <div className="schedule items">
          <img src="/NavbarAssets/calender.png" alt="" />
          <h4>Schedule</h4>
        </div>
        <div className="message items">
          <img src="/NavbarAssets/message.png" alt="" />
          <h4>Messages</h4>
        </div>
        <div className="transactions items">
          <img src="/NavbarAssets/transactions.png" alt="" />
          <h4>Transactions</h4>
        </div>
      </div>

      {/* Right Part */}
      <div className="right">
        <div className="doctor-img">
          <img src="/NavbarAssets/doctor.png" alt="" />
        </div>
        <div className="designations">
          <h4>Dr. Jose Simmons</h4>
          <p>General Practitioner</p>
        </div>
        <div className="settings">
          <img className="set-icon" src="/NavbarAssets/settings.png" alt="" />
          <img
            className="three-dots"
            src="/NavbarAssets/three-dots.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
