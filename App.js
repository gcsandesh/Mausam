import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CurrentWeather from './src/components/CurrentWeather'

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <CurrentWeather />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'aliceblue'
  }
})
