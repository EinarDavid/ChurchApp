import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import Colors from '../../Config/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Images from '../../Config/Images';

const ButtonImage = ({ Accion, onPress, ColorText, StyleButton }) => {
    return (
        <View style={{ ...styles.container, StyleButton }}>
            <TouchableOpacity style={styles.button} onPress={onPress} >
              <Image
                style={{ width: 24, height: 24 }}
                source={Images.ADDPHOTOS}
              />
            
            </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        //width: 90,
        //backgroundColor: '#fff',
        //,
        marginRight:5,
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingVertical: 5,
        borderRadius: 50,
        //borderColor: Colors.white,
        //borderWidth: 1,

    }, text: {
        //color: Colors.black,

    },

});
export default ButtonImage;