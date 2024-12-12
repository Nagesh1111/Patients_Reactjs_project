import React, { useEffect, useState } from "react";
import "../styles/RTHCard.css";
import { AppContext } from "../Appcontext/Appcontext";
import { useContext } from "react";

const RTHCard = () => {
  const { selectedPatient } = useContext(AppContext);

  const [resp, setResp] = useState();
  const [rlevel, setRLevel] = useState();
  const [temp, setTemp] = useState();
  const [tlevel, setTLevel] = useState();
  const [heart, setHeart] = useState();
  const [heartlevel, setHeartLevel] = useState();

  useEffect(() => {
    if (selectedPatient?.diagnosis_history?.length > 0) {
      const Diagnosis = selectedPatient.diagnosis_history[0];

      setResp(Diagnosis?.respiratory_rate?.value);
      setRLevel(Diagnosis?.respiratory_rate?.levels);
      setTemp(Diagnosis?.temperature?.value);
      setTLevel(Diagnosis?.temperature?.levels);
      setHeart(Diagnosis?.heart_rate?.value);
      setHeartLevel(Diagnosis?.heart_rate?.levels);
    }
  }, [selectedPatient]);

  if (
    !selectedPatient ||
    !selectedPatient.diagnosis_history ||
    selectedPatient.diagnosis_history.length === 0
  ) {
    return <div>Select a patient to view the data.</div>;
  }

  return (
    <div className="rth-container">
      <div className="rth-respiratory">
        <img
          src={`/RTHAssets/Respiratory rate.svg`}
          alt="Respiratory rate"
          width={100}
          height={100}
        />
        <p>Respiratory Rate</p>
        <h2>{resp ? `${resp} BPM` : "Data not available"}</h2>
        <p>{rlevel || "Data not available"}</p>
      </div>
      <div className="rth-temperature">
        <img
          src={`/RTHAssets/temperature.svg`}
          alt="Temperature"
          width={100}
          height={100}
        />
        <p>Temperature</p>
        <h2>{temp ? `${temp}°C` : "Data not available"}</h2>
        <p>{tlevel || "Data not available"}</p>
      </div>
      <div className="rth-heartbpm">
        <img
          src={`/RTHAssets/HeartBPM.svg`}
          alt="Heart Rate"
          width={100}
          height={100}
        />
        <p>Heart Rate</p>
        <h2>{heart ? `${heart} BPM` : "Data not available"}</h2>
        <p>{heartlevel || "Data not available"}</p>
      </div>
    </div>
  );
};

export default RTHCard;
