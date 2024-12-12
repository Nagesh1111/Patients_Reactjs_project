import React from "react";
import "../styles/Profile.css";
import LabTestResults from "./LabTestResults";
import { AppContext } from "../Appcontext/Appcontext";
import { useContext } from "react";

const Profile = () => {
  const { selectedPatient } = useContext(AppContext);

  if (!selectedPatient) {
    return <div>Please select a patient</div>;
  }

  return (
    <div>
      <div className="profile">
        <div className="profile-header">
          <img
            src={selectedPatient.profile_picture}
            alt="Profile"
            className="profile-img"
          />
          <h2 className="profile-name">{selectedPatient.name}</h2>
        </div>

        <div className="profile-info">
          <div className="info-item">
            <img src="/ProfileAssets/BirthIcon.png" alt="Birth Icon" />
            <div>
              <p className="info-label">Date of Birth</p>
              <p className="info-value">{selectedPatient.date_of_birth}</p>
            </div>
          </div>
          <div className="info-item">
            <img
              src="/ProfileAssets/FemaleIcon.png"
              className="female-img"
              alt="Gender Icon"
            />
            <div>
              <p className="info-label">Gender</p>
              <p className="info-value">{selectedPatient.gender}</p>
            </div>
          </div>
          <div className="info-item">
            <img src="/ProfileAssets/PhoneIcon.png" alt="Phone Icon" />
            <div>
              <p className="info-label">Contact Info</p>
              <p className="info-value">{selectedPatient.phone_number}</p>
            </div>
          </div>
          <div className="info-item">
            <img src="/ProfileAssets/PhoneIcon.png" alt="Emergency Icon" />
            <div>
              <p className="info-label">Emergency Contact</p>
              <p className="info-value">{selectedPatient.emergency_contact}</p>
            </div>
          </div>
          <div className="info-item">
            <img src="/ProfileAssets/InsuranceIcon.png" alt="Insurance Icon" />
            <div>
              <p className="info-label">Insurance Provider</p>
              <p className="info-value">{selectedPatient.insurance_type}</p>
            </div>
          </div>
        </div>

        <button className="show-all-btn">Show All Information</button>
      </div>
      <LabTestResults />
    </div>
  );
};

export default Profile;
