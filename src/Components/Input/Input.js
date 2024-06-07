import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

import Colors from '../../Config/Colors';

const TextInput = ({ keyboardType, onChangeText, value, secureTextEntry, autoCorrect, onEndEditing, errorMessage, placeholder, NameIcon }) => {
    return (
        <View style={styles.container}>
            <Input
                keyboardType={keyboardType}
                //keyboardType={'number-pad'}
                keyboardAppearance={'dark'}
                //textContentType='password'
                //TextBoxEmpty
                //style={styles.input}
                inputStyle={styles.text}
                inputContainerStyle={styles.input}
                errorStyle={styles.error}

                onChangeText={onChangeText}
                onEndEditing={onEndEditing}
                errorMessage={errorMessage}

                label={placeholder}
                labelStyle={styles.label}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCorrect={autoCorrect}
                placeholderTextColor={Colors.TextBoxEmpty}
                underlineColorAndroid="transparent"
                defaultValue={value}

                rightIcon={
                    <Icon
                        name={NameIcon}
                        size={30}

                        style={styles.containerImg}
                    />
                }

            />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        //marginBottom: 5,
        //margin: 1,
        //width: 360,
        alignSelf: 'center',
        //backgroundColor: '#eaeaea'
    },
    input: {
        backgroundColor: 'rgba(245, 245, 245, 0.85)',
        width: 360,
        borderRadius: 13,
        borderBottomWidth: 0,


    },
    text: {
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
    error: {
        color: Colors.primary,
        left: 10,
        fontWeight: 'bold',
    },
    label: {
        color: Colors.label,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        paddingLeft:10,
        paddingBottom:5,
    },
    containerImg: {
        width: 30,
        height: 30,
        color: Colors.IconColor,
        right: 20,
    },

});
export default TextInput;