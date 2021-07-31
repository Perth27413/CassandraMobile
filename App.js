import React from 'react'
import { View, StyleSheet } from 'react-native'
import Home from './components/Home'
import Register from './components/Register'
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {

  const Stack = createStackNavigator()

  return (
    // <View style={styles.container}>
    //   <View style={styles.head} />
    //   <View style={styles.main}>
        <NavigationContainer >
            <Stack.Navigator initialRouteName='register' screenOptions={{headerShown: false}}>
                <Stack.Screen name='register' component={Register}/>
                <Stack.Screen name='home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    //   </View>
    // </View>
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