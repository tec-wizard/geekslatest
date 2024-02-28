import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const TemperaturePage: React.FC = () => {
  const sampleData = [
    { time: '09:00 AM', value: '98.6°F' },
    { time: '09:30 AM', value: '98.7°F' },
    { time: '10:00 AM', value: '98.5°F' },
    { time: '10:30 AM', value: '98.8°F' },
    { time: '11:00 AM', value: '99.0°F' },
    { time: '11:30 AM', value: '99.2°F' },
    // { time: '12:00 PM', value: '99.1°F' },
    // { time: '12:30 PM', value: '99.4°F' },
    // { time: '01:00 PM', value: '99.5°F' },
    // { time: '01:30 PM', value: '99.3°F' },
    // { time: '02:00 PM', value: '99.7°F' },
    // { time: '02:30 PM', value: '99.8°F' },
    // { time: '03:00 PM', value: '99.9°F' },
    // { time: '03:30 PM', value: '100.0°F' },
    // { time: '04:00 PM', value: '100.2°F' },
    // { time: '04:30 PM', value: '100.1°F' },
    // { time: '05:00 PM', value: '100.3°F' },
    // { time: '05:30 PM', value: '100.4°F' },
    // { time: '06:00 PM', value: '100.5°F' },
    // { time: '06:30 PM', value: '100.6°F' },
    // { time: '07:00 PM', value: '100.7°F' },
    // { time: '07:30 PM', value: '100.8°F' },
    // { time: '08:00 PM', value: '100.9°F' },
    // { time: '08:30 PM', value: '101.0°F' },
    // Add more data entries as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showChart, setShowChart] = useState(false);

  const nextData = () => {
    if (currentIndex < sampleData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousData = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const chartData = sampleData.map((item) => parseFloat(item.value));
  const chartLabels = sampleData.map((item) => item.time);

  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Temperature Measurement Page</Text>
      {sampleData.length > 0 ? (
        <FlatList
          data={sampleData}
          renderItem={({ item }) => (
            <View style={styles.dataContainer}>
              <Text style={styles.dataText}>Time: {item.time}</Text>
              <Text style={styles.dataText}>Temperature: {item.value}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false} // Disable vertical scroll indicator
        />
      ) : (
        <Text>No data available</Text>
      )}
      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity onPress={previousData} style={styles.button}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextData} style={styles.button}>
          <Text>Next</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => setShowChart(!showChart)} style={styles.button}>
          <Text>{showChart ? 'Hide Chart' : 'Show Chart'}</Text>
        </TouchableOpacity>
      </View>
      {showChart && (
        <View>
          {/* <Text>Chart goes here</Text> */}
          <LineChart
            data={{
              labels: chartLabels,
              datasets: [
                {
                  data: chartData,
                },
              ],
            }}
            width={400}
            height={200}
            chartConfig={chartConfig}
          />
        </View>
      )}
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
    backgroundColor: '#e69f00',
  },
  dataContainer: {
    height: 100,
    width: 190, // Adjust the width as needed
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginVertical: 10,
  },
  dataText: {
    fontSize: 15,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TemperaturePage;
