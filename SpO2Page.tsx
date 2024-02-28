import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { data, fetchData } from './data';

const SpO2Page: React.FC = () => {
  const [showChart, setShowChart] = useState(false);
  const [spo2Data, setSpo2Data] = useState<any[]>([]); // Use spo2Data instead of sampleData

  useEffect(() => {
    fetchData();

    const spo2Data: any[] = Object.keys(data).map((entry_id) => {
      const entry = data[entry_id];
      const hours = Math.floor(entry_id * 30 / 60); // Calculate hours
      const minutes = (entry_id * 30) % 60; // Calculate minutes
      const time = `09:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} AM`;
      return {
        time,
        value: entry.spo2,
      };
    });

    setSpo2Data(spo2Data); // Set spo2Data

  }, []);

  const chartData = spo2Data.map((item) => parseFloat(item.value));
  const chartLabels = spo2Data.map((item) => item.time);

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>SpO2 Measurement Page</Text>
      {spo2Data.length > 0 ? (
        <View>
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
          {showChart && (
            <View style={styles.dataContainer}>
              {spo2Data.map((item, index) => (
                <View key={index} style={styles.dataItem}>
                  <Text style={styles.dataText}>Time: {item.time}</Text>
                  <Text style={styles.dataText}>SpO2: {item.value}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ) : (
        <Text>No data available</Text>
      )}
      <TouchableOpacity
        onPress={() => setShowChart(!showChart)}
        style={styles.button}
      >
        <Text>{showChart ? 'Hide Chart' : 'Show Chart'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: 'lightblue',
  },
  dataContainer: {
    marginTop: 20,
  },
  dataItem: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  dataText: {
    fontSize: 15,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#e69f00',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SpO2Page;
