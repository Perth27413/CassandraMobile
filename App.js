import 'react-native-gesture-handler';
import React from 'react'
import Home from './components/Home'
import Register from './components/Register'
import Detail from './components/Detail'
import RiderRegister from './components/RiderRegister'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='register' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='register' component={Register} />
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='detail' component={Detail} />
        <Stack.Screen name='riderRegister' component={RiderRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App