import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Description = ({ Titulo, AlineacionTitle, ColorTitle, FontSizeTitle, Contenido, FontSizeCon, AlineacionCon, ColorCon }) => {
    return (
        <View style={styles.container}>
            <Text style={{
                width: '100%',
                fontFamily: "Montserrat",
                fontStyle: 'normal',
                fontWeight: 'bold',
                backgroundColor: 'transparent',
                fontSize: FontSizeTitle,
                textAlign: AlineacionTitle,
                color: ColorTitle,
                //backgroundColor: '#eaeaea'
            }} >{Titulo}</Text>
            <Text style={{
                width: '100%',
                fontFamily: "Montserrat",
                fontStyle: 'normal',
                fontWeight: 'normal',
                backgroundColor: 'transparent',
                fontSize: FontSizeCon,
                textAlign: AlineacionCon,
                color: ColorCon,
                //backgroundColor: '#eaeaea'
            }} >{Contenido}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },


});
export default Description;
