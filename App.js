import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.currentTemp}>45'C</Text>
        <Text style={styles.feelsLikeTemp}>Feels like 50'C</Text>

        <View style={styles.highLowWrapper}>
          <Text>High: 46'C</Text>
          <Text>Low: 30'C</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's very hot!</Text>
        <Text style={styles.message}>It's perfect for swimming.</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'aliceblue'
  },
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
    fontSize: 30,
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
