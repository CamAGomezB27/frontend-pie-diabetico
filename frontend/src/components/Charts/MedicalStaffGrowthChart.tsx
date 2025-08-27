import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const monthNames = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
];

function getLastMonthsData(values: number[]) {
  const currentMonth = new Date().getMonth(); // 0 = Ene
  const labels: string[] = [];
  const dataValues: number[] = [];

  // Tomamos los últimos 6 meses incluyendo el actual
  for (let i = 5; i >= 0; i--) {
    const monthIndex = (currentMonth - i + 12) % 12; // wrap alrededor del año
    labels.push(monthNames[monthIndex]);
    dataValues.push(values[monthIndex]);
  }

  return { labels, dataValues };
}

export default function MedicalStaffGrowthChart() {
  // 🔹 Datos simulados (12 valores, uno por mes)
  const allData = [40, 50, 55, 60, 65, 70, 72, 78, 80, 85, 90, 95];

  const { labels, dataValues } = getLastMonthsData(allData);

  const data = {
    labels,
    datasets: [
      {
        label: "N° de Médicos",
        data: dataValues,
        backgroundColor: "rgba(155, 89, 182, 0.8)",
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permite que el gráfico ocupe el 100% de la altura de su contenedor
    plugins: {
      legend: { 
        display: false // No mostrar la leyenda si no es necesaria
      },
      title: {
        display: false, // Desactivamos el título aquí porque ya hay un h3 en el componente padre
      },
    },
    scales: {
        x: {
            grid: {
                display: false // Opcional: Oculta las líneas de la cuadrícula en el eje X
            }
        },
        y: {
            beginAtZero: true, // Asegura que el eje Y comience en 0
            grid: {
                color: 'rgba(0, 0, 0, 0.05)' // Color más tenue para las líneas de la cuadrícula en el eje Y
            }
        }
    }
  };

  return (
    // El div contenedor del gráfico ya no necesita estilos en línea de tamaño fijo.
    // Dejamos que el CSS del componente padre (chartCard) maneje el tamaño.
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
}