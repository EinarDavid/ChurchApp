import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Title = ({ Titulo, AlineacionTitle, ColorTitle,FontSize }) => {
    return (
        <View style={styles.containerGen}>
            <View style={styles.container}>
                <Text style={{
                    width: '100%',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    backgroundColor: 'transparent',
                    fontSize: FontSize,
                    fontFamily: "Montserrat",
                    textAlign: AlineacionTitle,
                    color: ColorTitle,
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
export default Title;
