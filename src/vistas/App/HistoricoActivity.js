import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, FlatList, ScrollView, SafeAreaView, KeyboardAvoidingView, Alert, ToastAndroid } from 'react-native';
import ButtonNav from '../../Components/Button/ButtonNavNext';
import { Historico } from '../../Components/Actividad/Historico';
import { useNavigation } from '@react-navigation/native';
import TitleDes from '../../Components/Text/TitleDescription';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

export const HistoricoActivity = () => {

  const navigation = useNavigation();
  var actividades = global.iglesia.Actividades;

  return (
    <ImageBackground source={Images.FONDO_PERFIL} style={{ width: '100%', height: '100%' }}>
      <View style={{ flex: 1, paddingTop: 0, flexDirection: 'column' }}>

        <View style={{ flex: 1, paddingTop: 10, justifyContent: 'space-evenly' }} >
          <View style={styles.boton}>
            <ButtonNav
              ColorText={Colors.primary}
              Accion={Constans.STRING.PREV}
              onPress={() => { navigation.navigate('tabs') }}
            />
          </View>
          <Image source={Images.LINE} style={{ width: '100%' }} />
        </View>
        <View style={{ flex: 11 }}>
          <SafeAreaView>
            <ScrollView>
              <View style={{ paddingLeft: 20, paddingRight: 20 }} >
                <View style={{ height: 15 }} />
                <TitleDes
                  Titulo={'Actividades'}
                  Contenido={'Estas son todas las actividades que participaste en nuestra Iglesia'}
                  AlineacionTitle={'left'}
                  AlineacionCon={'left'}
                  ColorTitle={Colors.Tittle}
                  ColorCon={Colors.description}
                  FontSize={30}
                />
                <View style={{ height: 30 }} />
                {
                  actividades.map((a, i) => {
                  console.log("--------------------",a)
                    return (
                      <View key={a.Codigo}>
                        <Historico actividades={a} />
                        <View style={{ height: 20 }} />
                      </View>
                    )
                  })
                }
                <View style={{ height: 30 }} />
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  boton: {
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  containerLogin: {
    //marginTop: 650,
    alignItems: 'center',
    justifyContent: 'center',
  },
});