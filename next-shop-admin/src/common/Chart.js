import { Chart as ChartJS, CategoryScale, LinearScale, BarElemet, Title, Tooltip, Legend } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElemet, Title, Tooltip, Legend);

export const Chart = ({ charData }) => {
  return (
    <>
      <Bar
        data={charData}
        options={{
          title: {
            display: true,
            text: 'Category',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </>
  );
};
