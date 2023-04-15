import React from 'react';
import CurrentWeather from './src/Components/CurrentWeather/CurrentWeather';
import { View, StyleSheet } from 'react-native';
import UpcomingWeather from './src/Screens/UpcomingWeather/UpcomingWeather';
import City from './src/Screens/City/City';

const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
