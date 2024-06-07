import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import Colors from '../../Config/Colors';
import Constans from '../../Config/Constans';

const ButtonInput = ({ onPressPrev, onPressNext }) => {
    return (
        <View style={styles.container} level='1'>
            <View style={styles.butonPrev}>
                <TouchableOpacity style={styles.button} onPress={onPressPrev} >
                    <Text
                        style={styles.text}>{Constans.STRING.PREV}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.butonNext}>
                <TouchableOpacity style={styles.button} onPress={onPressNext} >
                    <Text
                        style={styles.text}>{Constans.STRING.NETX}
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        //marginTop: 70,
        display: 'flex',
        flexDirection: 'column',
        //backgroundColor: '#fff',
        //marginBottom: 30,
        //width: '90%',
        //justifyContent: 'center'
    },
    button: {
        //width: '100%',
        //alignItems: 'center',
        //justifyContent: 'center',
        //paddingVertical: 5,
        borderRadius: 50,
        borderColor: Colors.white,
        //borderWidth: 1,

    }, text: {
        color: Colors.white,
        //textAlign: 'center',
        fontSize: 35,
        fontWeight: 'normal',
    },
    butonPrev: {
        alignItems: 'flex-start',
        position: 'absolute',
        //marginLeft: 30,
        //marginTop: 0,
        //width: '50%',
        //backgroundColor: '#eaeaea'
    },
    butonNext: {
        alignItems: 'flex-end',
        //width: '100%',
        //marginRight: 30,
        //marginTop: 0,
        //backgroundColor: '#383838'
    },

});
export default ButtonInput;