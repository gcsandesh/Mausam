import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  console.log('Hello World!')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#444444'
  }
})
