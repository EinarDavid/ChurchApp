import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../vistas/App/Home';
import Activity from '../vistas/App/Activity';
import Ubicacion from '../vistas/App/Ubication';
import Perfil from '../vistas/App/Perfil';
import Maps from '../vistas/App/Maps';

import Images from '../Config/Images';
import {Image} from 'react-native';
import Colors from '../Config/Colors';

const Tab = new createBottomTabNavigator();
const TabScreen = () => {
  const color = '#000000';
  return (
    <Tab.Navigator
      initialRouteName="Home"
    
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#ffffff77',

        tabBarStyle: { backgroundColor: Colors.primary },
        
        
      }}
      >
        
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={Images.HOMEICO}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          headerShown: false,
          tabBarLabel: 'Actividades',
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={Images.ACTIVIDADESICO}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Servicio"
        component={Ubicacion}
        options={{
          headerShown: false,
          tabBarLabel: 'Galeria',
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={Images.GALERIAICO}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          headerShown: false,
          tabBarLabel: 'Ubicación',
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={Images.UBICACION}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarLabel: 'Perfil',
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={Images.PERFILICO}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
