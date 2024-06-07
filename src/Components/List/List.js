import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../Config/Colors';
import Buttonpeq from '../Button/ButtonPeq';
import Images from '../../Config/Images';

const List = ({ ColorFondo, ColorIcon, BordeTopRight, BordeTopLeft, BorderBottomLef, BorderBottonRight, NameIcon, Titulo, AlineacionTitle, ColorTitle, Contenido, AlineacionCon, ColorCon, Accion, onPress }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 12,
            paddingRight: 12,
            height: 66,
            backgroundColor: ColorFondo,
            borderTopRightRadius: BordeTopRight,
            borderTopLeftRadius: BordeTopLeft,
            borderBottomLeftRadius: BorderBottomLef,
            borderBottomRightRadius: BorderBottonRight
        }}>
            
            <Image style={{width: 46, height: 46}} source={NameIcon} />
            <View style={{ width: 5 }} />
            <View style={{ width: 204 }} >
                <Text
                    style={{
                        width: '100%',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        backgroundColor: 'transparent',
                        fontSize: 18,
                        fontFamily: "Montserrat",
                        textAlign: AlineacionTitle,
                        color: ColorTitle,
                        //backgroundColor: '#eaeaea'
                    }}
                >{Titulo}
                </Text>

                <Text style={{
                    backgroundColor: 'transparent',
                    fontSize: 11,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "Montserrat",
                    width: '100%',
                    textAlign: AlineacionCon,
                    color: ColorCon,
                    //backgroundColor: 'black'
                }}>{Contenido}</Text>
            </View>
            <Buttonpeq
                Accion={Accion}
                onPress={onPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {


    },
    containerImg: {
        width: 46,
        height: 46,
        color: Colors.white,

    },


});
export default List;
