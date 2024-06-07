import React from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';

import Colors from '../../Config/Colors';
import Constants from '../../Config/Constans';


const TextInputForm = ({ source, onChangeText, secureTextEntry, autoCorrect, placeholder, value }) => {
    return (
        <View >
            <View style={styles.containerImg}>
                <Image
                    style={styles.inlineImg}
                    source={source} />
            </View>
            <View style={styles.container}>
                <TextInput
                    onChangeText={onChangeText}
                    style={styles.input}
                    placeholder={placeholder}
                    defaultValue={value}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={autoCorrect}
                    placeholderTextColor={Colors.TextBoxEmpty}
                    underlineColorAndroid="transparent"
                />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        //marginBottom: 5,
        //margin: 1,
        //width: 360,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#eaeaea'
    },
    input: {
        backgroundColor: 'rgba(245, 245, 245, 0.85)',
        alignItems: 'center',
        width: 360,
        //borderColor: Colors.white,
        borderRadius: 13,
        //height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
        //width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
        paddingLeft: 21,
        paddingRight: 21,
        paddingBottom: 16,
        paddingTop: 16,
        fontSize: 14,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 20,
    },
    containerImg:{
        width:30,
        height:30,
        position: 'absolute',
        //left: '80%',
        right: '10%',
        //paddingRight:30,
        //alignItems: 'flex-end',
        top: 16,
        bottom: 16,
        //backgroundColor:'#fff',
        zIndex:90,
        justifyContent:'center',
        alignItems:'center'
    },
    inlineImg: {
        
        zIndex: 99,
        width: 30,
        height: 20,
        
        
        //backgroundColor:'#eaeaea'
    },

});
export default TextInputForm;

