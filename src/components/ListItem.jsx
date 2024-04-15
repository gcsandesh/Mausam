import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { date, temp, item } = styles

  return (
    <View style={item}>
      <Feather name="sun" color="orange" size={24} />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  date: {
    color: 'white',
    fontSize: 15
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 5,
    backgroundColor: 'green'
  },
  temp: {
    color: 'white',
    fontSize: 20
  }
})

export default ListItem
