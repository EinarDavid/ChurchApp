//import * as React from 'react';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Loading from '../vistas/Onboarding/Loading';

import Splash1 from '../vistas/Onboarding/Splash1';
import Splash2 from '../vistas/Onboarding/Splash2';
import Login from '../vistas/Onboarding/Login';
import IniciarSesion from '../vistas/Login/IniciarSesion';

import Tabs from './TabsRouter';
import EditPerfil from '../vistas/App/EditPerfil';
import {HistoricoActivity} from '../vistas/App/HistoricoActivity';

const Stack = createStackNavigator();

const StackScreen = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splah1"
        component={Splash1}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Splah2"
        component={Splash2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IniciarSesion"
        component={IniciarSesion}
        initialParams={{route}}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const LogRouter = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Editar"
        component={EditPerfil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Historico"
        component={HistoricoActivity}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 3000);
  }, []);

  const GetSeasson = async () => {
    try {
      const Result = await AsyncStorage.getItem('islogged');
      //setIsLogged(JSON.parse(Result));
      console.log('-------', Result);
    } catch (error) {
      //console.log(error);
      error.log(error);
    }
  };

  return (
    <MainStack.Navigator headerShown={false}>
      {isLoading ? (
        <MainStack.Screen name="Loading" component={Loading} />
      ) : isLogged ? (
        <MainStack.Screen name="TabNavigator" component={LogRouter} />
      ) : (
        <MainStack.Screen
          name="LoginRegister"
          component={StackScreen}
          //initialParams={{setIsLogged}}
          initialParams={isLogged}
        />
      )}
    </MainStack.Navigator>
  );
};
const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
};
export default Navigator;
//initialParams={{ setIsLogged }}
