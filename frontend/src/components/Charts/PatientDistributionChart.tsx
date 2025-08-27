"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Props {
  active: number;
  inactive: number;
}

export default function PatientDistributionChart({ active, inactive }: Props) {
  const data = {
    labels: ["Activos", "Inactivos"],
    datasets: [
      {
        label: "Pacientes",
        data: [active, inactive],
        backgroundColor: ["#4CAF50", "#FF9800"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Distribución de Pacientes",
        font: { size: 16 },
        color: "#333",
        padding: { top: 10, bottom: 20 },
      },
      legend: { position: "bottom" as const },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "400px", height: "300px", margin: "0 auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
