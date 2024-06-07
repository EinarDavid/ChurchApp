import React from 'react'
import { StyleSheet, View, ImageBackground, FlatList, Image, SafeAreaView, ScrollView, Text, ToastAndroid } from 'react-native';
import Title from '../Text/Title';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';


export const CardPhoto = ({actividades}) => {
    var ImageArreglo = [{ Image: Images.IMAGE_CARRUSEL }, { Image: Images.IMAGEN2 }]

    const urlIp = '83.229.86.168:7000';
    if (actividades.FotosUsuario != undefined) {

        ImageArreglo = actividades.FotosUsuario.map((foto,i) => {

            var va = {
                Image: {
                    uri: (`http://${urlIp}/fotos/Iglesias/Actividad/Prueba/` + foto.Fotos)
                }
            }
            return va
        });
    }
    console.log('-----', ImageArreglo)

    return (
        <>
            <View style={{ backgroundColor: 'white', borderRadius: 13, elevation: 5 }}>
                <View style={{ borderBottomRightRadius: 13, borderBottomLeftRadius: 13 }}>
                    <View style={{ height: 15 }} />
                    <View style={{ marginLeft: 15, marginRight: 15 }}>
                        <Title
                            Titulo={actividades.Titulo}
                            AlineacionTitle={'center'}
                            ColorTitle={Colors.primary}
                            FontSize={26}
                        />
                        <View style={{ height: 5 }} />
                        <FlatList data={ImageArreglo}
                            horizontal
                            showsHorizontalScrollIndicator
                            renderItem={({ item }) => (<Image source={item.Image} style={{ width: 271, height: 154, borderRadius: 13, marginRight: 15, resizeMode: 'cover' }} />)}
                        />
                    </View>
                    <View style={{ height: 20 }} />
                </View>
            </View>
        </>
    )
}
