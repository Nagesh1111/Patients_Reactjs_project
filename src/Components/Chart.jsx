import React, { useEffect, useState } from "react";
import "../styles/Chart.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { AppContext } from "../Appcontext/Appcontext";
import { useContext } from "react";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const BloodPressureChart = () => {
  const { selectedPatient } = useContext(AppContext);

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (selectedPatient && selectedPatient.diagnosis_history) {
      const months = selectedPatient.diagnosis_history.map(
        (entry) => `${entry.month} ${entry.year}`
      );
      const systolicData = selectedPatient.diagnosis_history.map(
        (entry) => entry.blood_pressure.systolic.value
      );
      const diastolicData = selectedPatient.diagnosis_history.map(
        (entry) => entry.blood_pressure.diastolic.value
      );

      setChartData({
        labels: months,
        datasets: [
          {
            label: "Systolic",
            data: systolicData,
            borderColor: "red",
            fill: false,
            tension: 0.1,
            pointRadius: 5,
          },
          {
            label: "Diastolic",
            data: diastolicData,
            borderColor: "blue",
            fill: false,
            tension: 0.1,
            pointRadius: 5,
          },
        ],
      });
    }
  }, [selectedPatient]);

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 60,
        max: 180,
        stepSize: 20,
      },
    },
  };

  return (
    <div>
      {chartData ? (
        <div className="chart-container">
          <Line data={chartData} options={options} />
        </div>
      ) : (
        <div>Loading chart data...</div>
      )}
    </div>
  );
};

export default BloodPressureChart;
