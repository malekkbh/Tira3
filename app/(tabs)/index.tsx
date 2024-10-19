import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1 , 
    backgroundColor:'red' , 
    paddingTop: 45
  },
  txt:{
    fontSize: 70 , 
    marginLeft: 20 ,
  }
})