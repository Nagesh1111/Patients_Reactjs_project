import React, { useContext } from "react";
import "../styles/DiagnosisList.css";
import { AppContext } from "../Appcontext/Appcontext";

const DiagnosisList = () => {
  const { selectedPatient } = useContext(AppContext);

  if (
    !selectedPatient ||
    !selectedPatient.diagnostic_list ||
    selectedPatient.diagnostic_list.length === 0
  ) {
    return <div>Loading diagnosis data...</div>;
  }

  return (
    <div className="diagnosis-list">
      <h2 className="list-title">Diagnosis List</h2>

      <div className="table">
        <div className="table-row header">
          <div className="table-cell">Problem / Diagnosis</div>
          <div className="table-cell">Description</div>
          <div className="table-cell">Status</div>
        </div>

        {selectedPatient.diagnostic_list.map((diagnosis, index) => (
          <div key={index} className="table-row">
            <div className="table-cell">{diagnosis.name}</div>
            <div className="table-cell">{diagnosis.description}</div>
            <div className="table-cell">{diagnosis.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosisList;
