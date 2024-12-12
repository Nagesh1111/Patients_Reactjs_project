import React, { useState, useEffect } from "react";
import "../styles/BP.css";
import { AppContext } from "../Appcontext/Appcontext";
import { useContext } from "react";
import BloodPressureChart from "./Chart";

const BP = () => {
  const { selectedPatient } = useContext(AppContext);

  const [systolic, setSystolic] = useState(null);
  const [diastolic, setDiastolic] = useState(null);
  const [systolicLevel, setSystolicLevel] = useState(null);
  const [diastolicLevel, setDiastolicLevel] = useState(null);

  useEffect(() => {
    if (
      selectedPatient &&
      selectedPatient.diagnosis_history &&
      selectedPatient.diagnosis_history.length > 0
    ) {
      const lastDiagnosis =
        selectedPatient.diagnosis_history[
          selectedPatient.diagnosis_history.length - 1
        ];

      if (lastDiagnosis.blood_pressure) {
        setSystolic(lastDiagnosis.blood_pressure.systolic.value);
        setDiastolic(lastDiagnosis.blood_pressure.diastolic.value);
        setSystolicLevel(lastDiagnosis.blood_pressure.systolic.levels);
        setDiastolicLevel(lastDiagnosis.blood_pressure.diastolic.levels);
      }
    }
  }, [selectedPatient]);

  if (
    !selectedPatient ||
    !selectedPatient.diagnosis_history ||
    selectedPatient.diagnosis_history.length === 0
  ) {
    return <div>Loading patient data...</div>;
  }

  return (
    <div className="bp-main">
      <BloodPressureChart />
      <div className="bp-right">
        <div className="systolic">
          <div className="dot">
            <p>o</p>
            <h2>Systolic </h2>
          </div>

          <h2>{systolic !== null ? systolic : "N/A"}</h2>
          <div className="avg">
            {systolicLevel === "Higher than Average" ? (
              <img src="/ProfileAssets/ArrowUp.png" alt="" />
            ) : systolicLevel === "Lower than Average" ? (
              <img src="/ProfileAssets/ArrowDown.png" alt="" />
            ) : (
              <img src="/ProfileAssets/ArrowNeutral.png" alt="" />
            )}
            <p>{systolicLevel || "Normal"}</p>{" "}
          </div>
        </div>
        <br />
        <div className="diastolic">
          <div className="dot">
            <p>o</p>
            <h2>Diastolic </h2>
          </div>

          <h2>{diastolic !== null ? diastolic : "N/A"}</h2>
          <div className="avg">
            {diastolicLevel === "Higher than Average" ? (
              <img src="/ProfileAssets/ArrowUp.png" alt="" />
            ) : diastolicLevel === "Lower than Average" ? (
              <img src="/ProfileAssets/ArrowDown.png" alt="" />
            ) : (
              <img src="/ProfileAssets/ArrowNeutral.png" alt="" />
            )}
            <p>{diastolicLevel || "Normal"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BP;
