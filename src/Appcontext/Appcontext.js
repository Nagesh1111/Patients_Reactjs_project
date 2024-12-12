// src/Context/AppContext.js

import React, { createContext, useState } from "react";

// Create the context
const AppContext = createContext();

// AppProvider to manage shared state
const AppProvider = ({ children }) => {
  // The shared state for the selected patient
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Function to update the selected patient
  const selectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <AppContext.Provider value={{ selectedPatient, selectPatient }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
