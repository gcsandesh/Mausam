import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    <>
      <View style={styles.container}>
        <FontAwesome name="sun-o" size={100} color="orange" />
        <Text style={styles.currentTemp}>45&deg;C</Text>
        <Text style={styles.feelsLikeTemp}>Feels like 50&deg;C</Text>
        <View style={styles.highLowWrapper}>
          <Text>High: 46&deg;C </Text>
          <Text>Low: 30&deg;C</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's very hot!</Text>
        <Text style={styles.message}>It's perfect for swimming.</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  currentTemp: {
    fontSize: 50,
    fontWeight: '900'
  },
  feelsLikeTemp: {
    fontSize: 25,
    color: 'black'
  },
  highLowTemp: {
    color: 'black',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather
