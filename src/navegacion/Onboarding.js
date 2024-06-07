import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Splash1 from '../vistas/Onboarding/Splash1';
import Splash2 from '../vistas/Onboarding/Splash2';
import Login from '../vistas/Onboarding/Login';
import LocalStorage from '../Utils/LocalStorage';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      
        <Stack.Screen
            name='Splash1'
            component={Splash1}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name='Splash2'
            component={Splash2}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown: false}}
        />
        
    </Stack.Navigator>
  )
}
