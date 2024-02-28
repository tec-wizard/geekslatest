// BPMChart.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface BPMChartProps {
  data: Array<{ time: string; value: string }>;
}

const BPMChart: React.FC<BPMChartProps> = ({ data }) => {
  const chartData = data.map((item) => parseFloat(item.value));
  const chartLabels = data.map((item) => item.time);

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
  };

  return (
    <View>
      <Text>Chart goes here</Text>
      <LineChart
        data={{
          labels: chartLabels,
          datasets: [
            {
              data: chartData,
            },
          ],
        }}
        width={300}
        height={200}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default BPMChart;
