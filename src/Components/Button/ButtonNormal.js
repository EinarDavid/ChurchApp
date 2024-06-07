import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Colors from '../../Config/Colors';

const Button = ({ Accion, onPress, StyleButton, borderColor,borderWidth, backgroundColor,ColorsText }) => {
    return (
        <View style={{ ...styles.container, StyleButton }} level='1'>

            <TouchableOpacity style={{
                width: '100%',
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                paddingVertical: 5,
                borderRadius: 100,
                borderColor: borderColor,
                borderWidth: borderWidth,
                backgroundColor: backgroundColor,
            }} onPress={onPress} >
                <Text
                    style={{
                        color: ColorsText,
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontSize: 14,
                        letterSpacing: 3,
                        fontWeight: '500',
                        lineHeight: 20,
                    }}>{Accion}
                </Text>
            </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        //backgroundColor: '#fff',4DB6AC

    },

});
export default Button;