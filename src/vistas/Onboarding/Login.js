import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';
import TitleDes from '../../Components/Text/TitleDescription';
import ButtonNav from '../../Components/Button/ButtonNavNext';
import Button from '../../Components/Button/Button';

import Images from '../../Config/Images';
import Constans from '../../Config/Constans';
import Colors from '../../Config/Colors';

const Login = ({ navigation }) => {
    return (
        <ImageBackground source={Images.LOGIN} style={{ width: '100%', height: '100%' }}>
            <View style={{ flex: 1, paddingTop: 0, flexDirection: 'column' }} >
                <View style={{ flex: 1 ,  justifyContent: 'space-evenly'}}>
                    <View style={styles.boton}>
                        <ButtonNav
                            ColorText={Colors.white}
                            Accion={Constans.STRING.PREV}
                            onPress={() => { navigation.navigate('Splash2') }}
                        />
                    </View>
                    <Image source={Images.LINE} style={{ width: '100%' }} />
                </View>
                <View style={{flex: 11, alignItems:'center', justifyContent:'flex-end', paddingBottom:'10%', paddingLeft:20, paddingRight:20}}>
                    <Button
                        Accion={Constans.STRING.INICIARSESION}
                        onPress={() => { navigation.navigate('IniciarSesion') }}
                    />
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
    containerLogin: {
        marginTop: 650,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titlle: {
        marginBottom: 50, //ver en Mockup
        //backgroundColor: '#fff',
    },
    boton: {
        alignItems: 'flex-start',
        marginLeft: 20,
        //marginBottom: 30,
        //backgroundColor: '#fff',
    },
});
export default Login;

//<View style={styles.container} />