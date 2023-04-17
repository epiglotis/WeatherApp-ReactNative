import React from 'react';
import { FlatList, Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeatherItems from '../../Components/WeatherItems/WeatherItems';
import { ImageBackground,StatusBar } from 'react-native';

const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({ item }) => (
    <WeatherItems
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../../../assets/upcoming-background.jpg")} style={styles.image}>
      <FlatList data={weatherData} renderItem={renderItem} keyExtractor={(item)=>item.dt_txt} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:"royalblue",
  },
  image:{
    flex:1
  }
});

export default UpcomingWeather;
