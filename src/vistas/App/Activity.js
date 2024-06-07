import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ImageBackground, FlatList, Image, SafeAreaView, ScrollView, Text, ToastAndroid } from 'react-native';

import Title from '../../Components/Text/Title';
import TitleDes from '../../Components/Text/TitleDescription';
import ButtonNav from '../../Components/Button/ButtonNavNext';
import Section from '../../Components/Text/SeparadorSection';
import ButtonNormal from '../../Components/Button/ButtonNormal';
import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';
import { DropdownInput } from '../../Components/Input/Dropdown';
import ButtonImage from '../../Components/Button/ButtonImage';
import { CardActivity } from '../../Components/Actividad/CardActivity';
import Fetch from '../../Utils//Fetch';

// const ImageArreglo = [{ Image: Images.ACTIVITY }, { Image: Images.ACTIVITY }]

const Activity = () => {
    const urlIp = '83.229.86.168:7000';

    const [actividades, setActividades] = useState(global.iglesia.Actividades)

    const ActualizaIglesia = (callback) => {
        Fetch("/VerDatosIglesia", async (iglesia) => {
            global.iglesia = iglesia;
            callback();
            // console.log("Res entro aqui--------", global.iglesia);

        }, { idIglesia: global.usuario.usuario.Iglesia }, "POST");
    }


    useEffect(() => {
        ActualizaIglesia(() => {
            setActividades(global.iglesia.Actividades);
        });
    }, [])


    // console.log (global.iglesia.Actividades);


    const _onPressFeIgualAamor = () => {
        ToastAndroid.show('Esta Aplicación es desarrollada por EINAR DAVID VILLARROEL', ToastAndroid.SHORT);
    }


    return (
        <ImageBackground source={Images.FONDO_WHITE} style={{ width: '100%', height: '100%' }}>
            <View style={{ paddingTop: 0, flexDirection: 'column' }}>

                <SafeAreaView>
                    <ScrollView>
                        <Image source={Images.ACTIVITY_IMAGE} style={{ width: '100%', height: 272, resizeMode: 'stretch', position: 'absolute' }} />
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
                                Titulo={Constans.STRING.ACTIVIDAD}
                                AlineacionTitle={'center'}
                                ColorTitle={Colors.white}
                                FontSize={26}
                                Contenido={Constans.STRING.ACT_DES}
                                AlineacionCon={'center'}
                                ColorCon={Colors.white}
                            />
                            <View style={{ height: 80 }} />

                            {
                                actividades.map((a, i) => {
                                    var fechaactual = new Date();

                                    var fecha = new Date(a.Inicio);
                                    fecha.setDate(fecha.getDate() + 2);
                                    console.log(fechaactual, fecha, fechaactual < fecha)

                                    if (fechaactual <= fecha) {
                                        return (
                                            <View key={i}>
                                                <CardActivity  actividades={a} />
                                            </View>
                                        )

                                    }

                                })
                            }
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
        //alignItems: 'center',

    },
    boton: {
        alignItems: 'flex-start',
        //marginLeft: 30,
    },
    AccionContainer: {
        marginTop: 60,
        alignItems: 'flex-end',
        // justifyContent: 'center',
        // backgroundColor: 'blue',
        width: '20%',
        alignItems: 'flex-end'
    },
    ContainerDescription: {
        // backgroundColor: 'black',
        width: '100%',
        // display: 'flex',
        // display: 'none',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,

    },
});
export default Activity;

/*
<Image source={Images.ACTIVITY_IMAGE} style={{ width: '100%', height: 272 }}>

                    </Image>


                    <FlatList data={ImageArreglo}
                                showsVerticalScrollIndicator
                                renderItem={({ item }) => (<Image source={item.Image} style={{ width: '100%', height:450,  resizeMode: 'stretch', borderRadius: 13 }} />)}
                            />

                            borderColor: '#aeaeae', borderBottomWidth:1, borderLeftWidth:1, borderRightWidth:1,
*/