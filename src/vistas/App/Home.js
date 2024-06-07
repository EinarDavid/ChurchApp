import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
  ToastAndroid,
} from 'react-native';
import Title from '../../Components/Text/Title';
import TitleDes from '../../Components/Text/TitleDescription';
import ButtonNav from '../../Components/Button/ButtonNavNext';
import Section from '../../Components/Text/SeparadorSection';
import Button from '../../Components/Button/Button';
import Notificaciones from '../../Utils/Notificaciones';
import notifee from '@notifee/react-native';
import SocketIOClient from 'socket.io-client/dist/socket.io.js';
import {io} from 'socket.io-client';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

var ImageArreglo = [{Image: Images.IMAGE_CARRUSEL}, {Image: Images.IMAGEN2}];

const Home = () => {
  const urlIp = '83.229.86.168:7000';
  if (global.iglesia != undefined) {
    ImageArreglo = global.iglesia.Fotos.map(a => {
      var va = {
        Image: {
          uri: `http://${urlIp}/fotos/Iglesias/` + a,
        },
      };
      return va;
    });
  }
  const _onPressFeIgualAamor = async () => {
    // Request permissions (required for iOS)
    console.log('Press');
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        //smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });

    ToastAndroid.show(
      'Esta Aplicación es desarrollada por EINAR DAVID VILLARROEL',
      ToastAndroid.SHORT,
    );
  };

  //const ahora = new Date(2023, 5, 7, 15, 38, 0, 0);
  //console.log('----', ahora);

  //const hora = new Date(ahora).toLocaleString();
  //console.log('hora-----***', ahora);
  //console.log( "hora//////" , new Date(hora))

  ////console.log( 'hora', )
  //console.log("66666666666666666666666666666666666666666666666",global.iglesia);
  //const socket = useRef();

  useEffect(() => {
    const dominio = 'http://83.229.86.168:7000';
    const socket = SocketIOClient(dominio, {
      jsonp: false,
    });
    socket.on('connect', () => {
      console.log('connected');
      socket.emit('hello', 'world');
    });
    var cont = 1;
    socket.on('nuevaActividad:::' + global.iglesia._id, res => {
      console.log('----------------', cont);
      console.log(res);
      console.log('----------------');
      cont += 1;

      //Notifiación de registro de actividad

      const tiempo = new Date(new Date().getTime() + 10 * 1000);
      const hora = new Date(tiempo).toLocaleString();
      console.log('hora--------***', hora);

      Notificaciones.nuevaFecha(tiempo, {
        id: res.Codigo,
        title: res.Titulo,
        body: res.Descripcion,
      });

      
    });
  }, []);

  return (
    <ImageBackground
      source={Images.HOME2}
      style={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
      <View style={{flex: 1, paddingTop: 0, flexDirection: 'column'}}>
        <View style={{flex: 1, justifyContent: 'space-evenly', paddingTop: 10}}>
          <View style={styles.boton}>
            <ButtonNav
              ColorText={Colors.white}
              Accion={Constans.STRING.FE_IGUAL_AMOR}
              onPress={_onPressFeIgualAamor}
            />
          </View>
          <Image source={Images.LINE} style={{width: '100%'}} />
        </View>
        <View style={{flex: 11}}>
          <SafeAreaView>
            <ScrollView>
              <View style={{paddingLeft: 20, paddingRight: 20}}>
                <View style={{height: 15}} />
                <View style={styles.titlle}>
                  <Title
                    Titulo={global.iglesia.Nombre}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.white}
                    FontSize={30}
                  />
                  <View style={{height: 30}} />
                  <TitleDes
                    Titulo={global.iglesia.Titulo_Descripcion}
                    AlineacionTitle={'center'}
                    ColorTitle={Colors.white}
                    FontSize={16}
                    Contenido={global.iglesia.Descripcion}
                    AlineacionCon={'center'}
                    ColorCon={Colors.white}
                  />
                  <View style={{height: 30}} />
                  <TitleDes
                    Titulo={Constans.STRING.MISION}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.white}
                    FontSize={26}
                    Contenido={'"' + global.iglesia.Mision + '"'}
                    AlineacionCon={'left'}
                    ColorCon={Colors.white}
                  />

                  <View style={{height: 30}} />
                  <TitleDes
                    Titulo={Constans.STRING.VISION}
                    AlineacionTitle={'right'}
                    ColorTitle={Colors.white}
                    FontSize={26}
                    Contenido={'"' + global.iglesia.Vision + '"'}
                    AlineacionCon={'right'}
                    ColorCon={Colors.white}
                  />
                  <View style={{height: 30}} />
                  <Section
                    Titulo={Constans.STRING.RECUERDOS}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.white}
                    FontSize={12}
                  />
                  <View style={{height: 15}} />
                  <FlatList
                    data={ImageArreglo}
                    horizontal
                    showsHorizontalScrollIndicator
                    renderItem={({item}) => (
                      <Image
                        source={item.Image}
                        style={{
                          width: 271,
                          height: 154,
                          borderRadius: 13,
                          marginRight: 15,
                        }}
                      />
                    )}
                  />

                  <View style={{height: 30}} />
                  <TitleDes
                    Titulo={Constans.STRING.RES_SOCIAL}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.white}
                    FontSize={14}
                    Contenido={global.iglesia.ResSocial}
                    AlineacionCon={'left'}
                    ColorCon={Colors.white}
                  />
                  <View style={{height: 30}} />
                  <TitleDes
                    Titulo={Constans.STRING.PASTORES}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.white}
                    FontSize={14}
                    Contenido={global.iglesia.Pastores}
                    AlineacionCon={'left'}
                    ColorCon={Colors.white}
                  />
                  <View style={{height: 30}} />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
    </ImageBackground>
    /*
           
        */
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlle: {
    //marginBottom: 50, //ver en Mockup
    //backgroundColor: '#eaeaea',
    //alignItems: 'center', <Image source={Images.IMAGE_CARRUSEL} style={{ width: 271, height:154, borderRadius:13, left:20,}} />
  },
  boton: {
    alignItems: 'flex-start',
    marginLeft: 20,
  },
});
export default Home;

/*
<ButtonNav
                    StyleButton={{ position: 'absolute', marginTop: 20, alignItems: 'flex-end' }}
                    ColorText={Colors.white}
                    Accion={Constans.STRING.FE_IGUAL_AMOR}
                //onPress={() => { navigation.navigate('Login') }}
                />
                <Image source={Images.LINE} style={{ width: '110%', position: 'absolute', marginTop: 68 }} />
*/
