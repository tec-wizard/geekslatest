import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import SpO2Page from './SpO2Page';
import BPMPage from './BPMPage';
import TemperaturePage from './TemperaturePage';
import LoginPage from './LoginPage';
import EmergencyAlertsPage from './EmergencyAlertsPage'; // Import the EmergencyAlertsPage component

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="SpO2" component={SpO2Page} />
        <Stack.Screen name="BPM" component={BPMPage} />
        <Stack.Screen name="Temperature" component={TemperaturePage} />
        <Stack.Screen name="Emergency Alerts" component={EmergencyAlertsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
