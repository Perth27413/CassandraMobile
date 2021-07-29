import React from 'react'
import { View, StyleSheet } from 'react-native'
import Home from './components/Home'
import Register from './components/Register'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}/>
      <View style={styles.main}>
        {/* <Home/> */}
        <Register/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    backgroundColor: '#18BCBE',
    height: 250
  },
  main: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
})

export default App
