import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SideMenu: React.FC = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear authentication tokens or reset the user state
    // Then navigate to the login screen
    // You can also use navigation.reset() to reset the navigation stack
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const handleExitApp = () => {
    // Implement your logic to exit the app (e.g., close the app)
    // This may vary depending on your app's platform and requirements

    // On React Native, you can use BackHandler to exit the app
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={handleLogout}>
        <Text>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleExitApp}>
        <Text>Exit App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SideMenu;
