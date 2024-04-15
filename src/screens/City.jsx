import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*TODO: city name, population, country, sunrise, sunset */}
      {/*   TODO:  image background related to city */}
      <Text>City</Text>
    </SafeAreaView>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default City
