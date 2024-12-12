import React from "react";
import "../styles/DiagnosisHistory.css";
import BP from "./BP";
import RTHCard from "./RTHCard";
import DiagnosisList from "./DiagnosisList";

const DiagnosisHistory = () => {
  return (
    <div className="dia">
      <h2>DiagnosisHistory</h2>
      <BP></BP>
      <div className="rth">
        <RTHCard></RTHCard>
      </div>
      <DiagnosisList></DiagnosisList>
    </div>
  );
};

export default DiagnosisHistory;
