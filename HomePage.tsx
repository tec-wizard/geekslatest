import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const HomePage: React.FC<Props> = ({ navigation }) => {
  const goToSpO2Page = () => {
    navigation.navigate('SpO2');
  };

  const goToBPMPage = () => {
    navigation.navigate('BPM');
  };

  const goToTemperaturePage = () => {
    navigation.navigate('Temperature');
  };

  const handleLogout = () => {
    // Implement your logout logic here (if needed)
    // You can clear the user's session or authentication state here

    // Navigate to the login screen
    navigation.navigate('Login');
  };

  const goToEmergencyAlerts = () => {
    navigation.navigate('Emergency Alerts');
  };

  return (
    <ImageBackground
      source={require('./assets/bg.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={goToSpO2Page}
        >
          <Text style={styles.buttonText}>SpO2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={goToBPMPage}
        >
          <Text style={styles.buttonText}>BPM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={goToTemperaturePage}
        >
          <Text style={styles.buttonText}>Temperature</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={goToEmergencyAlerts}
        >
          <Text style={styles.buttonText}>Emergency Alerts</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    width: '80%',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoutButton: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 15,
    borderRadius: 10,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomePage;
