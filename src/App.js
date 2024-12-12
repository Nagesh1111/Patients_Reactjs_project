import "./App.css";

import DiagnosisHistory from "./Components/DiagnosisHistory";
import Navbar from "./Components/Navbar";
import Patients from "./Components/Patients";
import Profile from "./Components/Profile";
import { AppProvider } from "./Appcontext/Appcontext";
function App() {
  return (
    <AppProvider>
      <div className="App">
        <Navbar></Navbar>
        <div className="main-middle">
          <Patients></Patients>
          <DiagnosisHistory></DiagnosisHistory>
          <Profile></Profile>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
