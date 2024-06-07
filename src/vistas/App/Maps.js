import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  ToastAndroid,
  Dimensions,
  Link,
  TouchableHighlight,
} from 'react-native';
import Title from '../../Components/Text/Title';
import TitleDes from '../../Components/Text/TitleDescription';
import ButtonNav from '../../Components/Button/ButtonNavNext';
import Section from '../../Components/Text/SeparadorSection';
import {CardPhoto} from '../../Components/Actividad/CardPhoto';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

import Mapbox from '@rnmapbox/maps';

Mapbox.setWellKnownTileServer('Mapbox');

Mapbox.setAccessToken(
  'pk.eyJ1IjoiZWluYXI3IiwiYSI6ImNsa2JjdTc3MTBlajMzam8zbDBpbjZ5djUifQ.FaV8jPii2YjefDm2MjX38g',
);

const Maps = () => {
  var iglesias = global.AllIgle;
  //console.log("-----------------", iglesias)
  // const [actividades, setActividades] = useState(global.iglesia.Actividades)

  const _onPressFeIgualAamor = () => {
    ToastAndroid.show(
      'Esta Aplicación es desarrollada por EINAR DAVID VILLARROEL',
      ToastAndroid.SHORT,
    );
  };

  renderAnnotations = (Coordinate, data) => {
    //console.log('entro render', data);
    var url =
      'https://www.google.com/maps?q=' + data.Latitud + ',' + data.Longitud;

    var Texto = data.Nombre ;
    return (
      <>
        <View key={data._id}>
          <Mapbox.PointAnnotation
            key={data._id}
            id="pointAnnotation"
            title="Test"
            coordinate={Coordinate}>
            <Mapbox.Callout title={Texto}>
            </Mapbox.Callout>
          </Mapbox.PointAnnotation>
        </View>
      </>
    );
  };

  return (
    <ImageBackground
      source={Images.FONDO_WHITE}
      style={{width: '100%', height: '100%'}}>
      <View style={{paddingTop: 0, flexDirection: 'column'}}>
        <SafeAreaView>
          <ScrollView>
            {/* <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 10}}>
              <View style={styles.boton}>
                <ButtonNav
                  ColorText={Colors.primary}
                  Accion={Constans.STRING.FE_IGUAL_AMOR}
                  onPress={_onPressFeIgualAamor}
                />
              </View>

            </View> */}

            <View style={styles.page}>
              <View style={styles.container}>
                <Mapbox.MapView
                  style={styles.map}
                  zoomEnabled={true}
                  showUserLocation={true}
                  userTrackingMode={1}
                  ref={map => {
                    map = map;
                  }}>
                  <Mapbox.Camera
                    ref={ref => (camera = ref)}
                    zoomLevel={11.5}
                    centerCoordinate={[-66.1500, -17.400]}
                    animationDuration={2000}></Mapbox.Camera>
                  {iglesias.map(igle => {
                    if (igle.Longitud != undefined) {
                      //
                      return(
                        <View key={igle._id}>
                          {
                            renderAnnotations(
                              [Number(igle.Longitud), Number(igle.Latitud)],
                              igle,
                            )
                          }
                        </View>
                      ) 
                    } 
                  })}
                </Mapbox.MapView>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    //marginBottom: 50, //ver en Mockup
    //backgroundColor: '#eaeaea',
    //textAlign: 'right'
  },
  boton: {
    alignItems: 'flex-start',
    //marginLeft: 30,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height: ScreenHeight,
    width: '100%',
  },
  map: {
    flex: 1,
  },
  annotationContainer: {
    backgroundColor: '#FFFFFF',
  },
  annotationFill: {
    backgroundColor: '#eaeaea',
  },
  text: {
    color: '#000000',
    backgroundColor: 'red',
  },
});
export default Maps;
