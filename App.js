import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CurrentWeather from './src/components/CurrentWeather'
import UpcomingWeather from './src/components/UpcomingWeather'

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'aliceblue'
  }
})
