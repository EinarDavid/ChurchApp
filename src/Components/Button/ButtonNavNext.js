import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import Colors from '../../Config/Colors';

const ButtonNav = ({ Accion, onPress, ColorText, StyleButton }) => {
  return (
    <View style={{ ...styles.container, StyleButton }}>
      <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text
          style={{
            color: ColorText,
            textAlign: 'center',
            fontSize: 35,
            fontWeight: 'normal',
          }}>{Accion}
        </Text>
      </TouchableOpacity>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //width: 90,
    //backgroundColor: '#fff',
    //,
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
export default ButtonNav;