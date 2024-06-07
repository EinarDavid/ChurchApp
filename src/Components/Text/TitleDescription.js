import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../Config/Colors';


const TitleDescription = ({ Titulo, Contenido, AlineacionTitle, AlineacionCon, ColorTitle, ColorCon,FontSize }) => {
    return (
        <View style={styles.containerGen}>
            <View style={styles.container}>
                <Text style={{
                    width: '100%',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    backgroundColor: 'transparent',
                    fontSize: FontSize,
                    //marginBottom: 10, //Espaciador
                    fontFamily: "Montserrat",
                    //marginRight:30,
                    //marginLeft:30, 
                    textAlign: AlineacionTitle,
                    color: ColorTitle,
                    //backgroundColor: '#eaeaea'
                }} >{Titulo}</Text>
                <View style={{height:10}}/>
                <Text style={{
                    //width: '80%',
                    backgroundColor: 'transparent',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: "Montserrat",
                    //marginRight:18,
                    //marginLeft:18,
                    //marginHorizontal:'4%', 
                    width:'100%',
                    textAlign: AlineacionCon,
                    color: ColorCon,
                    //backgroundColor: 'black'
                }}>{Contenido}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerGen: {
        //marginTop: '150%',
        //backgroundColor:'yellow'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    

});
export default TitleDescription;

/*
alignItems: 'center',
        justifyContent: 'center',
*/