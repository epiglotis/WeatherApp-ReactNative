import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main:{
            temp_max:8.55,
            temp_min:7.55
        },
        weather:[
            {
            main:"Clear"
            }
        ]
    },{dt_txt: "2023-02-18 15:00:00",
    main:{
        temp_max:8.55,
        temp_min:7.55
    },
    weather:[
        {
        main:"Clouds"
        }
    ]},{dt_txt: "2023-02-18 18:00:00",
    main:{
        temp_max:8.55,
        temp_min:7.55
    },
    weather:[
        {
        main:"Rain"
        }
    ]}
]

const UpcomingWeather = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <Text>UpcomingWeather</Text>
        <FlatList data={} renderItem={}/>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    
    container: {
        flex:1
    }

})

export default UpcomingWeather