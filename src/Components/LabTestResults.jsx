import React, { useContext } from "react";
import "../styles/LabTestResults.css";
import { AppContext } from "../Appcontext/Appcontext";

const LabTestResults = () => {
  const { selectedPatient } = useContext(AppContext);

  if (
    !selectedPatient ||
    !selectedPatient.lab_results ||
    selectedPatient.lab_results.length === 0
  ) {
    return <div>Loading lab test results...</div>;
  }

  return (
    <div className="lab-test-results">
      <h2 className="results-title">Lab Results</h2>

      <div className="test-list">
        {selectedPatient.lab_results.map((test, index) => (
          <div key={index} className="test-item">
            <div className="test-name">{test}</div>
            <img src="/ProfileAssets/download.png" alt="Download" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabTestResults;
