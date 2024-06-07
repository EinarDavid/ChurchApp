import React from 'react'
import { StyleSheet, View, ImageBackground, FlatList, Image, SafeAreaView, ScrollView, Text, ToastAndroid } from 'react-native';
import TitleDes from '../Text/TitleDescription';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';
import { ListImage } from '../List/ListImage';

export const Historico = ({ actividades }) => {

    

    return (
        <>{
            actividades.AsistenciaActividad.map((asistencia, i) => {
                if (asistencia.Id_miembro == global.usuario.usuario._id) {

                    return (
                        <View key={i} style={{ borderRadius: 13, elevation: 5 }}>
                            <ListImage
                                ColorFondo={Colors.secundary}
                                BordeTopRight={13}
                                BordeTopLeft={13}
                                BorderBottomLef={13}
                                BorderBottonRight={13}

                                FotoActividad={ actividades.FotoActividad}

                                Titulo={actividades.Titulo}
                                AlineacionTitle={'left'}
                                ColorTitle={Colors.white}
                                Contenido={actividades.Descripcion}
                                AlineacionCon={'left'}
                                ColorCon={Colors.white}
                            />
                        </View>
                    )
                }
            })
        }


        </>
    )
}


