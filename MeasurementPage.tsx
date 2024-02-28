import React from 'react';
import { View, Text } from 'react-native';

const MeasurementPage: React.FC<{ measurementType: string }> = ({ measurementType }) => {
  return (
    <View>
      <Text>{measurementType} Measurement Page</Text>
      {/* Add your measurement logic and UI here */}
    </View>
  );
};

export default MeasurementPage;
