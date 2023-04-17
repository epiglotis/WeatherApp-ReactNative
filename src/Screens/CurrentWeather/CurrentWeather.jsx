import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import RowText from '../../Components/RowText/RowText';
import { WeatherType } from '../../Utilities/WeatherType';

const CurrentWeather = ({weatherData}) => {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData;
  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: WeatherType[weatherCondition]?.backgroundColor },
      ]}
    >
      <View style={styles.container}>
        <Feather
          name={WeatherType[weatherCondition]?.icon}
          size={100}
          color='black'
        />
        <Text style={styles.tempStyle}>{`${temp}°`}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}°`}</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>{`High: ${temp_max}° `}</Text>
          <Text style={styles.highLow}>{`Low: ${temp_min}°`}</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <RowText
          messageOne={weather[0]?.description}
          messageTwo={WeatherType[weatherCondition].message}
          containerStyles={styles.bodyWrapper}
          messageOneStyles={styles.description}
          messageTwoStyles={styles.message}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyle: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});

export default CurrentWeather;
