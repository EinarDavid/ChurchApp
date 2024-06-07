import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Colors from '../../Config/Colors';

const Button = ({ Accion, onPress,StyleButton }) => {
    return (
        <View style={{...styles.container, StyleButton}} level='1'>

            <TouchableOpacity style={styles.button} onPress={onPress} >
                <Text
                    style={styles.text}>{Accion}
                </Text>
            </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width:'100%',
        //backgroundColor: '#fff',

    },
    button: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        //flexDirection: 'row',
        //position: 'absolute',
        paddingVertical: 5,
        borderRadius: 100,
        //borderColor: Colors.white,
        //borderWidth: 2,
        backgroundColor: '#4DB6AC',
        //backgroundColor: 'linear-gradient(314.33deg, #00796B -3.69%, #4DB6AC 109.82%)',

    }, text: {
        color: Colors.white,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontStyle:'normal',
        fontSize: 14,
        letterSpacing: 3,
        fontWeight: '500',
        lineHeight: 20,
    },

});
export default Button;