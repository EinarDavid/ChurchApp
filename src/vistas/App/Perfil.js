import React from 'react';
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
import ButtonNormal from '../../Components/Button/ButtonNormal';
import List from '../../Components/List/List';
import PerfilDes from '../../Components/Text/PerfilDescription';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

import {useNavigation} from '@react-navigation/native';

import LocalStorage from '../../Utils/LocalStorage';

const ImageArreglo = [
  {Image: Images.IMAGE_CARRUSEL},
  {Image: Images.IMAGE_CARRUSEL},
];

const Home = ({}) => {
  const navigation = useNavigation();
  const urlIp = '83.229.86.168:7000';
  const _onPressFeIgualAamor = () => {
    ToastAndroid.show(
      'Esta Aplicación es desarrollada por EINAR DAVID VILLARROEL',
      ToastAndroid.SHORT,
    );
  };

  const CerrarSesion = () => {
    global.usuario = undefined;
    global.iglesia = undefined;
    global.AllIgle = undefined;
    LocalStorage.eliminar('usuario', () => {
      navigation.navigate('IniciarSesion');
    });
  };
  return (
    <ImageBackground
      source={Images.FONDO_PERFIL}
      style={{width: '100%', height: '100%'}}>
      <View style={{paddingTop: 0, flexDirection: 'column'}}>
        <SafeAreaView>
          <ScrollView>
            <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10}}>
              <View style={styles.boton}>
                <ButtonNav
                  ColorText={Colors.primary}
                  Accion={Constans.STRING.FE_IGUAL_AMOR}
                  onPress={_onPressFeIgualAamor}
                />
              </View>
              <View>
                <Image
                  source={Images.FONDO_FOTOPERFIL}
                  style={{width: '100%', height: 220, resizeMode: 'stretch'}}
                />
                <Image
                  source={{
                    uri:
                      `http://${urlIp}/fotos/Membresias/` +
                      global.usuario.usuario.FotoPerfil,
                  }}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 100,
                    alignSelf: 'center',
                    position: 'absolute',
                    marginTop: 23,
                  }}
                />
              </View>
              <Section
                Titulo={Constans.STRING.TITULOSPLASH1}
                AlineacionTitle={'center'}
                ColorTitle={Colors.primary}
                FontSize={12}
              />
              <Title
                Titulo={
                  global.usuario.usuario.Nombre +
                  ' ' +
                  global.usuario.usuario.Apellido_Paterno
                }
                AlineacionTitle={'center'}
                ColorTitle={Colors.primary}
                FontSize={26}
              />
              <View style={{height: 40}} />
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 13,
                  elevation: 5,
                }}>
                <List
                  ColorFondo={Colors.secundary}
                  ColorIcon={Colors.white}
                  BordeTopRight={13}
                  BordeTopLeft={13}
                  NameIcon={Images.PERFILCIRCULE}
                  Titulo={'Tu perfil'}
                  AlineacionTitle={'left'}
                  ColorTitle={Colors.white}
                  Contenido={'Administra tu información'}
                  AlineacionCon={'left'}
                  //ColorCon={Colors.white}
                  Accion={'Editar'}
                  onPress={() => navigation.navigate('Editar')}
                />
                <View style={{width: 310, alignSelf: 'center'}}>
                  <View style={{height: 20}} />
                  <PerfilDes
                    Titulo={'Nombre:'}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.secundary}
                    FontSizeTitle={14}
                    Contenido={
                      global.usuario.usuario.Nombre +
                      ' ' +
                      global.usuario.usuario.Apellido_Paterno +
                      ' ' +
                      global.usuario.usuario.Apellido_Materno
                    }
                    AlineacionCon={'left'}
                    ColorCon={Colors.description}
                    FontSizeCon={14}
                  />
                  <PerfilDes
                    Titulo={'Fecha de Nacimiento:'}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.secundary}
                    FontSizeTitle={14}
                    Contenido={
                      global.usuario.usuario.Fecha_Nacimiento +
                      ' ' +
                      global.usuario.usuario.Lugar_Nacimiento
                    }
                    AlineacionCon={'left'}
                    ColorCon={Colors.description}
                    FontSizeCon={14}
                  />
                  <PerfilDes
                    Titulo={'Email:'}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.secundary}
                    FontSizeTitle={14}
                    Contenido={global.usuario.usuario.Email}
                    AlineacionCon={'left'}
                    ColorCon={Colors.description}
                    FontSizeCon={14}
                  />
                  <PerfilDes
                    Titulo={'Genero:'}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.secundary}
                    FontSizeTitle={14}
                    Contenido={global.usuario.usuario.Genero}
                    AlineacionCon={'left'}
                    ColorCon={Colors.description}
                    FontSizeCon={14}
                  />
                  <PerfilDes
                    Titulo={'Celular:'}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.secundary}
                    FontSizeTitle={14}
                    Contenido={global.usuario.usuario.Contacto}
                    AlineacionCon={'left'}
                    ColorCon={Colors.description}
                    FontSizeCon={14}
                  />
                  <PerfilDes
                    Titulo={'Profesión:'}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.secundary}
                    FontSizeTitle={14}
                    Contenido={global.usuario.usuario.Profesion}
                    AlineacionCon={'left'}
                    ColorCon={Colors.description}
                    FontSizeCon={14}
                  />
                  <PerfilDes
                    Titulo={'Estado Civil:'}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.secundary}
                    FontSizeTitle={14}
                    Contenido={global.usuario.usuario.Estado_Civil}
                    AlineacionCon={'left'}
                    ColorCon={Colors.description}
                    FontSizeCon={14}
                  />
                  <PerfilDes
                    Titulo={'Dirección:'}
                    AlineacionTitle={'left'}
                    ColorTitle={Colors.secundary}
                    FontSizeTitle={14}
                    Contenido={global.usuario.usuario.Direccion}
                    AlineacionCon={'left'}
                    ColorCon={Colors.description}
                    FontSizeCon={14}
                  />
                  <View style={{height: 20}} />
                </View>
              </View>
              <View style={{height: 20}} />
              {/* <View style={{borderRadius: 13, elevation: 5}}>
                <List
                  ColorFondo={Colors.white}
                  ColorIcon={Colors.secundary}
                  BordeTopRight={13}
                  BordeTopLeft={13}
                  BorderBottomLef={13}
                  BorderBottonRight={13}
                  NameIcon={'lock'}
                  Titulo={'Seguridad'}
                  AlineacionTitle={'left'}
                  ColorTitle={Colors.Tittle}
                  Contenido={'Administra tu contraseña'}
                  AlineacionCon={'left'}
                  ColorCon={Colors.description}
                  Accion={'Cambiar'}
                  //onPress={}
                />
              </View> 
              <View style={{height: 20}} />*/}
              <View style={{borderRadius: 13, elevation: 5}}>
                <List
                  ColorFondo={Colors.white}
                  BordeTopRight={13}
                  BordeTopLeft={13}
                  BorderBottomLef={13}
                  BorderBottonRight={13}
                  NameIcon={Images.ACTIVIDADESICO2}
                  //ColorIcon={Colors.secundary}
                  Titulo={'Actividades'}
                  AlineacionTitle={'left'}
                  ColorTitle={Colors.Tittle}
                  Contenido={'Mira las actividades que participaste'}
                  AlineacionCon={'left'}
                  ColorCon={Colors.description}
                  Accion={'Mirar'}
                  onPress={() => navigation.navigate('Historico')}
                />
              </View>
              <View style={{height: 30}} />
              <ButtonNormal
                Accion={'Cerrar Sesión'}
                onPress={() => CerrarSesion()}
                borderColor={Colors.primary}
                borderWidth={2}
                backgroundColor={Colors.white}
                ColorsText={Colors.primary}
              />
              <View style={{height: 30}} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
    /*
           
        */
  );
};
const styles = StyleSheet.create({
  ContainerList: {
    backgroundColor: Colors.secundary,
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
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
    //marginLeft: 20,
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

                <Image source={require('../../../assets/imagen-carrusel.jpg')} style={{width: 150, height:150, borderRadius:100, alignSelf:'center', position:'absolute', marginTop:100}} />
*/
