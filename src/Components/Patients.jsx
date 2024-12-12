import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import "../styles/Patients.css";
import axios from "axios";
import { AppContext } from "../Appcontext/Appcontext";

const Patients = () => {
  const [data, setData] = useState([]);
  const { selectPatient } = useContext(AppContext);
  useEffect(() => {
    const apiUrl = "https://fedskillstest.coalitiontechnologies.workers.dev";
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Basic ${btoa("coalition:skills-test")}`,
          },
        });

        setData(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
      console.log(data);
    };

    fetchPatientData();
  }, []);
  return (
    <div className="patients-main">
      <div className="top">
        <h2>Patients</h2>
        <img src="/PatientsAssets/search.png" alt="" />
      </div>
      {data.map((patient) => (
        <Card patient={patient} onClick={() => selectPatient(patient)}></Card>
      ))}
    </div>
  );
};

export default Patients;
