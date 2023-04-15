import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CityIconText from '../../Components/CityIconText/CityIconText';

const City = () => {

  const {container,cityName,cityText,countryName,populationWrapper,populationText,riseSetWrapper,riseSetText,imageLayout,rowLayout} = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../../assets/city-background.jpg')}
        style={imageLayout}
      >
        <Text style={[cityText, cityName]}>London</Text>
        <Text style={[cityText, countryName]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <CityIconText
            iconName={'user'}
            iconColor={'red'}
            bodyText={'8000'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <CityIconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'10:46:45 A.M.'}
            bodyTextStyles={riseSetText}
          />
          <CityIconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'17:35:41 P.M.'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 35,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout:{
    flexDirection:"row",
    alignItems:"center",
  },
});

export default City;
