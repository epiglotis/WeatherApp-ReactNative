import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Components/Tabs/Tabs';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useGetWeather } from './src/Hooks/useGetWeather/useGetWeather';
import ErrorItem from './src/Components/ErrorItem/ErrorItem';

const App = () => {
  const [loading, error, weather] = useGetWeather();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  if (loading) {
    return (
      <View style={styles.container}>
        {error ? (
          <ErrorItem />
        ) : (
          <ActivityIndicator size={'large'} color={'blue'} />
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
