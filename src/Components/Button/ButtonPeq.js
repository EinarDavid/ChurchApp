import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Colors from '../../Config/Colors';

const Buttonpeq = ({ Accion, onPress,StyleButton }) => {
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
        justifyContent:'flex-end',
        //width:'100%',
        //backgroundColor: '#fff',
        

    },
    button: {
        width: '100%',
        height: 27,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        //flexDirection: 'row',
        //position: 'absolute',
        borderRadius: 25,
        borderWidth:1,
        borderColor:Colors.secundary,
        //borderColor: Colors.white,
        //borderWidth: 2,
        backgroundColor: Colors.white,
        //backgroundColor: 'linear-gradient(314.33deg, #00796B -3.69%, #4DB6AC 109.82%)',

    }, text: {
        paddingLeft:10,
        paddingRight:10,
        color: Colors.secundary,
        textTransform:'uppercase',
        fontFamily: 'Montserrat',
        fontStyle:'normal',
        fontWeight: '500',
        fontSize: 11,
        textAlign: 'right',
        letterSpacing: 1,
    },

});
export default Buttonpeq;