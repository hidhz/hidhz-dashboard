import { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Pie } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Grafik() {
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({})
  useEffect(() => {
    setChartData({
      labels: ["januari","februari", "maret", "april", "mei", "juni", "juli", "agustus", "oktober", "september", "november", "desember"],
      datasets: [
	{
	  label: "produk",
	  data: [1100,4126, 2876, 6515, 5682, 1253, 7432, 1732, 8523, 4431, 5837, 3824, 8983],
	  borderColor: "rgb(53, 162, 235)",
	  backgroundColor: "rgb(54, 162, 235)",
	},
	{
          label: "jasa",
          data: [1200,7526, 286, 1115, 4282, 4133, 1242, 2000, 5000, 3000, 7000, 902, 346],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(255, 64, 105)",
        }
      ]
    })
    setChartOptions({
      responsive: true,
      plugins: {
	legend: {
	  position: "top",
	},
	title: {
	  display: true,
	  text: "grafik penjualan produk dan jasa",
	}
      },
    })
  }, [])
  return (
    <div className="pt-12">
      <Bar options={chartOptions} data={chartData} />
    </div>
  )
}
