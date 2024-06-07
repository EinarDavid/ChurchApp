import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, FlatList, Image, SafeAreaView, ScrollView, Text, ToastAndroid } from 'react-native';
import Title from '../../Components/Text/Title';
import TitleDes from '../../Components/Text/TitleDescription';
import ButtonNav from '../../Components/Button/ButtonNavNext';
import Section from '../../Components/Text/SeparadorSection';
import { CardPhoto } from '../../Components/Actividad/CardPhoto';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';


const Horarios = () => {
    
    var actividades = global.iglesia.Actividades;
    // const [actividades, setActividades] = useState(global.iglesia.Actividades)

    const _onPressFeIgualAamor = () => {
        ToastAndroid.show('Esta Aplicación es desarrollada por EINAR DAVID VILLARROEL', ToastAndroid.SHORT);
    }

    return (
        <ImageBackground source={Images.FONDO_WHITE} style={{ width: '100%', height: '100%' }}>
            <View style={{ paddingTop: 0, flexDirection: 'column' }}>

                <SafeAreaView>
                    <ScrollView>
                        <Image source={Images.HORARIO} style={{ width: '100%', height: 272, resizeMode: 'stretch', position: 'absolute' }} />
                        <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }} >
                            <View style={styles.boton}>
                                <ButtonNav
                                    ColorText={Colors.white}
                                    Accion={Constans.STRING.FE_IGUAL_AMOR}
                                    onPress={_onPressFeIgualAamor}
                                />
                            </View>
                            <View style={{ height: 100 }} />
                            <TitleDes
                                Titulo={Constans.STRING.HORARIO}
                                AlineacionTitle={'center'}
                                ColorTitle={Colors.white}
                                FontSize={26}
                                Contenido={Constans.STRING.HORARIOS_DES}
                                AlineacionCon={'center'}
                                ColorCon={Colors.white}
                            />
                            <View style={{ height: 80 }} />
                            {
                                actividades.map((a, i) => {
                                    if (a.FotosUsuario.length > 0) {
                                        return (
                                            <View key={i}>
                                                <CardPhoto actividades={a} />
                                                <View style={{ height: 20 }} />
                                            </View>
                                        );
                                    }
                                }
                                )
                            }

                            <View style={{ height: 20 }} />

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titlle: {
        //marginBottom: 50, //ver en Mockup
        //backgroundColor: '#eaeaea',
        //textAlign: 'right'

    },
    boton: {
        alignItems: 'flex-start',
        //marginLeft: 30,
    },
});
export default Horarios;

