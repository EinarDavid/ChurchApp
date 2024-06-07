import React from 'react';
import {ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import LocalStorage from '../../Utils/LocalStorage';
import Notificaciones from '../../Utils/Notificaciones';

import Images from '../../Config/Images';

const Loading = () => {
    const navigation = useNavigation();
    /*setTimeout(() => {
        navigation.navigate('Onboarding')

    }, 2000);*/
   
    LocalStorage.leer('usuario', (us)=>{
      
        //console.log("funcion entro")
        //console.log("*****************usuario.................", us, ) 
        if (us.usuario !== undefined) {
          global.usuario = us;
          LocalStorage.leer('iglesia', (igle) =>{
            global.iglesia = igle

            LocalStorage.leer('Alliglesias', (AllIgle)=>{
              global.AllIgle = AllIgle
              
              navigation.navigate('TabNavigator')
            })
          })
          
        }
        else{
            navigation.navigate('Onboarding')
            //console.log('opooooonboarding')
        }
      });
    return (
        <ImageBackground source={Images.LOADING} style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
    );
}

export default Loading;