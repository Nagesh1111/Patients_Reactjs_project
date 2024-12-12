import React from "react";
import "../styles/Card.css";

const Card = ({ patient, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="left-section">
        <img src={patient.profile_picture} alt="logo" className="logo" />
      </div>
      <div className="middle-section">
        <div className="name">{patient.name}</div>
        <div className="gender-age">
          {patient.gender} {patient.age}
        </div>
      </div>
      <div className="right-section">
        <div className="dots-icon">⋮</div>
      </div>
    </div>
  );
};

export default Card;
