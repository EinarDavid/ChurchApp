import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import TabScreen from './TabsRouter';
import EditarPerfil from '../vistas/App/EditPerfil';
import { HistoricoActivity } from '../vistas/App/HistoricoActivity';

const Stack = createStackNavigator();

export const LogRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabs"
        component={TabScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editar"
        component={EditarPerfil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Historico"
        component={HistoricoActivity}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}
