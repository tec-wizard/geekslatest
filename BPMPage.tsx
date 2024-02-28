import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const BPMPage: React.FC = () => {
  const sampleData = [
    { time: '09:00 AM', value: '72 BPM' },
    { time: '09:30 AM', value: '70 BPM' },
    { time: '10:00 AM', value: '68 BPM' },
    { time: '10:30 AM', value: '80 BPM' },
    { time: '11:00 AM', value: '75 BPM' },
    { time: '11:30 AM', value: '85 BPM' },
    // { time: '12:00 PM', value: '88 BPM' },
    // { time: '12:30 PM', value: '90 BPM' },
    // { time: '01:00 PM', value: '92 BPM' },
    // { time: '01:30 PM', value: '95 BPM' },
    // { time: '02:00 PM', value: '98 BPM' },
    // { time: '02:30 PM', value: '100 BPM' },
    // { time: '03:00 PM', value: '102 BPM' },
    // { time: '03:30 PM', value: '105 BPM' },
    // { time: '04:00 PM', value: '108 BPM' },
    // { time: '04:30 PM', value: '110 BPM' },
    // { time: '05:00 PM', value: '112 BPM' },
    // { time: '05:30 PM', value: '115 BPM' },
    // { time: '06:00 PM', value: '118 BPM' },
    // { time: '06:30 PM', value: '120 BPM' },
    // { time: '07:00 PM', value: '122 BPM' },
    // { time: '07:30 PM', value: '125 BPM' },
    // { time: '08:00 PM', value: '128 BPM' },
    // { time: '08:30 PM', value: '130 BPM' },
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
      <Text style={styles.pageTitle}>BPM Measurement Page</Text>
      {sampleData.length > 0 ? (
        <FlatList
          data={sampleData}
          renderItem={({ item }) => (
            <View style={styles.dataContainer}>
              <Text style={styles.dataText}>Time: {item.time}</Text>
              <Text style={styles.dataText}>BPM: {item.value}</Text>
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
    backgroundColor: 'lightgreen',
  },
  dataContainer: {
    height: 100,
    width: 160, // Adjust the width as needed
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginVertical: 10, // Adjust vertical margin
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
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default BPMPage;
