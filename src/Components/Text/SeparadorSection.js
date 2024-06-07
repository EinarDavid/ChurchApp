import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../Config/Colors';


const Section = ({ Titulo, AlineacionTitle, ColorTitle,FontSize }) => {
    return (
        <View style={styles.containerGen}>
            <View style={styles.container}>
                <Text style={{
                    width: '100%',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    backgroundColor: 'transparent',
                    fontSize: FontSize,
                    //marginBottom: 10, //Espaciador
                    fontFamily: "Montserrat",
                    //marginRight:30,
                    //marginLeft:30, 
                    textAlign: AlineacionTitle,
                    color: ColorTitle,
                    letterSpacing:2,
                    textTransform: 'uppercase',
                    //backgroundColor: '#eaeaea'
                }} >{Titulo}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerGen: {
        //marginTop: '150%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    

});
export default Section;

/*
alignItems: 'center',
        justifyContent: 'center',
*/