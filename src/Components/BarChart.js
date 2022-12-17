import { Bar } from "react-chartjs-2";

export default function BarChart({ data }) {
//legend: {display: false}
  return (
    <div>
      <h2 className="text-center">Bar Chart</h2>
      <Bar data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
};
