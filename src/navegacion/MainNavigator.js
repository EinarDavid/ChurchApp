import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Loading from '../vistas/Onboarding/Loading';

import {Onboarding} from './Onboarding';
import IniciarSesion from '../vistas/Login/IniciarSesion';
import {LogRouter} from './LogRouter';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            title: 'Load',
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: 'Inicio',
          }}
        />

        <Stack.Screen
          name="IniciarSesion"
          component={IniciarSesion}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TabNavigator"
          component={LogRouter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
