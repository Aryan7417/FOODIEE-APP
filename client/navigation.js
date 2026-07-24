import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/app/screens/HomeScreen'
import RestronScreen from './src/app/screens/RestronScreen'
import CardScreen from '@/app/screens/CardScreen';
import OrderPrepairings from '@/app/screens/OrderPrepairing';



const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }
        }

      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RestronScreen" component={RestronScreen} />
        <Stack.Screen name="Cart" options={{ presentation: 'modal' }} component={CardScreen} />
        <Stack.Screen name="OrderPrepairing" options={{ presentation: 'fullScreenModal' }} component={OrderPrepairings} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Navigation