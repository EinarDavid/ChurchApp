import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground, FlatList, Image, SafeAreaView, ScrollView, Text, ToastAndroid } from 'react-native';
import TitleDes from '../../Components/Text/TitleDescription';
import { DropdownInput } from '../../Components/Input/Dropdown';
import ButtonImage from '../../Components/Button/ButtonImage';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Fetch from '../../Utils/Fetch';

import Colors from '../../Config/Colors';


export const CardActivity = ({ actividades }) => {

    const urlIp = '83.229.86.168:7000';
    var Valor = "";
    for (let index = 0; index < actividades.AsistenciaActividad.length; index++) {

        if (actividades.AsistenciaActividad[index].Id_miembro == global.usuario.usuario._id) {
            Valor = actividades.AsistenciaActividad[index].Estado;
            // console.log('Value', value);
        }

    }

    const [value, setValue] = useState(Valor);
    const navigation = useNavigation();

    const data = [
        { label: 'Te Interesa', value: '1' },
        { label: 'Asistiré', value: '2' },
        { label: 'No me Interesa', value: '3' },
    ];

    const CambiarEstado = (newValue) => {
        //poner un temporizador de 1 segundo y luego preguntar al servidor.
        try {
            var url = `/ActividadAsistencia/`
            Fetch(url, (res) => {
                //console.log("cosooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo", res)
                
                setValue(newValue);
                navigation.reset({
                    index: 0,
                    routes: [{name: 'tabs'}],
                  });
            }, {
                id_iglesia: global.usuario.usuario.Iglesia,
                id_actividad: actividades._id,
                id_miembro: global.usuario.usuario._id,
                estado: newValue,
            }, "POST")

        } catch (error) {
            console.log("Error en el Fetch", error)
        }
    }

    const SubirFotos = () => {

        try {

            launchImageLibrary({ mediaType: "photo", selectionLimit: 1 }, async (r) => {
                if (r.assets != undefined) {
                    var photo = {
                        uri: r.assets[0].uri,
                        type: r.assets[0].type,
                        name: r.assets[0].fileName,
                    };
                    console.log('Precionado', photo);
                    var url = `/SubirFoto/`
                    var form = new FormData();
                    form.append("photo", photo);
                    form.append("Miembro", global.usuario.usuario._id);
                    form.append("Iglesia", global.usuario.usuario.Iglesia);
                    form.append("Actividad", actividades._id)


                    var res = await fetch('http://83.229.86.168:7000/SubirFoto/', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json'
                        },
                        body: form
                    });
                    var resserv = await res.json()
                    if(resserv.jala!=undefined)
                    {
                        //actualizar la pantalla.
                        navigation.reset({
                            index: 0,
                            routes: [{name: 'tabs'}],
                          });
                    }

                }

            });
        } catch (error) {

        }
    }


    return (
        <View >
            <View style={{ backgroundColor: 'white', borderRadius: 13, elevation: 5 }}>
                <Image source={{ uri: `http://${urlIp}/fotos/Iglesias/Actividad/` + actividades.FotoActividad }} style={{ width: '100%', height: 450, resizeMode: 'stretch', borderRadius: 10 }} />
                <View style={{ borderBottomRightRadius: 13, borderBottomLeftRadius: 13 }} >
                    <View style={{ height: 15 }} />
                    <View style={styles.ContainerDescription}>
                        <View style={{ width: '80%', alignItems: 'flex-start' }}>
                            <TitleDes
                                Titulo={actividades.Titulo}
                                AlineacionTitle={'left'}
                                ColorTitle={Colors.primary}
                                FontSize={26}
                                Contenido={actividades.Descripcion}
                                AlineacionCon={'left'}
                                ColorCon={Colors.description}
                            />
                        </View>
                        {/* <View style={{ height: 15 }} /> */}
                        <View style={styles.AccionContainer}>

                            <ButtonImage
                                onPress={() => { SubirFotos() }}
                            />
                            <View style={{ height: 10 }} />

                            <DropdownInput data={data} value={value} itemChange={CambiarEstado} />
                        </View>
                    </View>
                    <View style={{ height: 20 }} />
                </View>
            </View>
            <View style={{ height: 20 }} />
        </View>
    )
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